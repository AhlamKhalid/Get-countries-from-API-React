function Countries({ countries }) {
  return (
    <div>
      {countries.map((country, index) => (
        <div key={index} className="country-wrapper">
          <div className="country-info">
            <span className="country-region">{country.region} </span>
            <p className="country-name">{country.name}</p>
          </div>
          <div className="country-flag">
            <img src={country.flag} alt="country flag" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Countries;
