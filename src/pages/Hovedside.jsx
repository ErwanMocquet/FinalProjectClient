import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import CompanyTable from "../data/CompanyTable";
import PaginationBox from "../components/PaginationBox";
import { Helmet, HelmetProvider } from "react-helmet-async";

const PAGE_SIZE = 12;

export default function Hovedside() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        response = await axios.get("https://final-project-eaaa.herokuapp.com/api/companies");

        const companyData = response.data.hits.hits.map((hit) => {
          const {
            vejnavn,
            husnummerFra,
            etage,
            sidedoer,
            postdistrikt,
            postnummer,
            kommune,
          } =
            hit._source.Vrvirksomhed.virksomhedMetadata
              .nyesteBeliggenhedsadresse;
          const kommuneNavn = kommune ? kommune.kommuneNavn : null;
          return {
            cvrNummer: hit._source.Vrvirksomhed.cvrNummer,
            navn: hit._source.Vrvirksomhed.virksomhedMetadata.nyesteNavn.navn,
            telefonNummer: hit._source.Vrvirksomhed.telefonNummer,
            address: {
              vejnavn,
              husnummerFra,
              etage,
              sidedoer,
              postnummer,
              postdistrikt,
              kommuneNavn,
            },
          };
        });

        companyData.sort((a, b) => a.navn.localeCompare(b.navn));
        setCompanies(companyData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const displayCompanies = companies.slice(startIndex, endIndex);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main>
      <HelmetProvider>
        <Helmet>
          <title>Company Table | Provide Business - Database</title>
        </Helmet>
      </HelmetProvider>
      <CompanyTable companies={displayCompanies} />
      <PaginationBox
        loading={isLoading}
        pageSize={PAGE_SIZE}
        pageNumber={currentPage}
        setPageNumber={handlePageChange}
        length={companies.length}
      />
      <Footer />
    </main>
  );
}
