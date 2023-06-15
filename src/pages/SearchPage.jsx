import React, { useState } from "react";
import axios from "axios";

export default function SearchPage() {
  const [nameQuery, setNameQuery] = useState("");
  const [cvrQuery, setCvrQuery] = useState("");
  const [telefonQuery, setTelefonQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setIsLoading(true)

    try {
      const params = {
        name: nameQuery.trim(),
        cvr: cvrQuery.trim(),
        region: telefonQuery.trim(),
      };

      const response = await axios.get("http://localhost:3001/api/companies", { params });
      const searchResultData = response.data.hits.hits.map((hit) => ({
        cvrNummer: hit._source.Vrvirksomhed.cvrNummer,
        navn: hit._source.Vrvirksomhed.virksomhedMetadata.nyesteNavn.navn,
        telefonNummer: hit._source.Vrvirksomhed.telefonNummer,
      }));

      const filteredResults = searchResultData.filter((company) => {
        const { navn, cvrNummer, telefonNummer } = company;
        const cvrString = cvrNummer.toString();
        const telefonString = telefonNummer ? telefonNummer.toString() : '';

      
        return (
          (nameQuery && navn.toLowerCase().includes(nameQuery.toLowerCase())) ||
          (cvrQuery && cvrString.includes(cvrQuery)) ||
          (telefonQuery && telefonString.toLowerCase().includes(telefonQuery.toLowerCase()))
                    
        );
      });
  
      setSearchResults(filteredResults);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <h1>Company Search</h1>
      <div>
        <input
          type="text"
          value={nameQuery}
          onChange={(e) => setNameQuery(e.target.value)}
          placeholder="Search by company name"
        />
                <input
          type="text"
          value={cvrQuery}
          onChange={(e) => setCvrQuery(e.target.value)}
          placeholder="Search by CVR number"
        />
                <input
          type="text"
          value={telefonQuery}
          onChange={(e) => setTelefonQuery(e.target.value)}
          placeholder="Search by telefon nummer"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {searchResults.length > 0 ? (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((result) => (
              <li key={result.navn}>{result.navn}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>No results found</div>
      )}
    </div>
  );
}
