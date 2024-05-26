import React, { useState, useEffect } from "react";

export default function CompanyModal() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await fetch("https://api.hh.ru/employers");
      const data = await response.json();
      setCompanies(data);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Компании</h2>
        <div className="company-cards">
          {companies.map((company) => (
            <a href={company.link} target="_blank" rel="noopener noreferrer">
              <div className="company-card">
                <h3>{company.name}</h3>
                <p>{company.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
