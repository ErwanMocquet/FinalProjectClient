import React, { useState } from "react";
import "../css/CompanyTable.css";
import regionData from "./DataRegions";

const CompanyTable = ({ companies }) => {
  const [selectedRegions, setSelectedRegions] = useState([]);

  const getCompanyCVR = (company) => {
    if (company && company.cvrNummer) {
      return company.cvrNummer;
    }
    return "No cvr";
  };

  const getCompanyName = (company) => {
    if (company && company.navn) {
      return company.navn;
    }
    return "No name";
  };

  const getCompanyAddress = (company) => {
    if (company && company.address) {
      const { vejnavn, husnummerFra, etage, sidedoer } = company.address;
      let addressString = "";

      if (vejnavn) {
        addressString += vejnavn;
      }
      if (husnummerFra) {
        addressString += " " + husnummerFra;
      }
      if (etage) {
        addressString += ", " + etage;
      }
      if (sidedoer) {
        addressString += ", " + sidedoer;
      }
      return addressString;
    }

    return "No address";
  };

  const getCompanyBy = (company) => {
    if (
      company &&
      company.address &&
      company.address.postnummer &&
      company.address.postdistrikt
    ) {
      return `${company.address.postnummer} ${company.address.postdistrikt}`;
    }
    return "No city";
  };

  const getCompanyPhoneNumber = (company) => {
    if (
      company &&
      company.telefonNummer &&
      company.telefonNummer.length > 0 &&
      company.telefonNummer[0].kontaktoplysning
    ) {
      return company.telefonNummer[0].kontaktoplysning;
    }
    return "No phone number";
  };

  const getCompanyKommune = (company) => {
    if (company && company.address && company.address.kommuneNavn) {
      return company.address.kommuneNavn;
    }
    return "No municipality";
  };

  const getCompanyRegion = (company) => {
    if (company && company.address && company.address.kommuneNavn) {
      const kommune = company.address.kommuneNavn.toLowerCase().trim();
      const regionObj = regionData.find((region) =>
        region.municipalities.some(
          (municipality) => municipality.toLowerCase().trim() === kommune
        )
      );

      if (regionObj) {
        return regionObj.region;
      } else {
        return "Unknown Region";
      }
    }

    return "No region";
  };

  const handleRegionFilterChange = (event) => {
    const { value, checked } = event.target;

    setSelectedRegions((prevSelectedRegions) => {
      if (checked) {
        return [...prevSelectedRegions, value];
      } else {
        return prevSelectedRegions.filter((region) => region !== value);
      }
    });
  };

  const filteredCompanies = selectedRegions.length > 0
  ? companies.filter((company) => selectedRegions.includes(getCompanyRegion(company)))
  : companies;

  return (
    <div className="company-table-cont">
      <div className="region-filter">
        <span>Filter by Region:</span>
        {regionData.map((region) => (
          <label key={region.region}>
            <input
              type="checkbox"
              value={region.region}
              checked={selectedRegions.includes(region.region)}
              onChange={handleRegionFilterChange}
            />
            {region.region}
          </label>
        ))}
      </div>
      {filteredCompanies.length > 0 ? (
        <table className="company-table">
          <thead>
            <tr>
              <th>Virksomheds navn</th>
              <th>CVR-nummer</th>
              <th>Adresse</th>
              <th>By</th>
              <th>Telefon nummer</th>
              <th>Kommune</th>
              <th>Region</th>
            </tr>
          </thead>
          <tbody>
            {filteredCompanies.map((company, index) => (
              <tr key={index}>
                <td className="left-row-table">{getCompanyName(company)}</td>
                <td>{getCompanyCVR(company)}</td>
                <td>{getCompanyAddress(company)}</td>
                <td>{getCompanyBy(company)}</td>
                <td>{getCompanyPhoneNumber(company)}</td>
                <td className="kommune-table">{getCompanyKommune(company)}</td>
                <td>{getCompanyRegion(company)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default CompanyTable;
