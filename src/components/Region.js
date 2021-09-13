function Region({ region, setRegion }) {
  // change region
  const changeRegion = (event) => {
    setRegion(event.target.value);
  };

  return (
    <div className="radio-wrapper">
      <h2 className="radio-header">Region</h2>
      <div className="radio-container">
        <input
          id="rb1"
          type="radio"
          name="region"
          value="all"
          className="radio-input"
          checked={region === "all"}
          onChange={changeRegion}
        />
        <label htmlFor="rb1" className="radio-label">
          All
        </label>
      </div>
      <div className="radio-container">
        <input
          id="rb2"
          type="radio"
          name="region"
          value="asia"
          className="radio-input"
          checked={region === "asia"}
          onChange={changeRegion}
        />
        <label htmlFor="rb2" className="radio-label">
          Asia
        </label>
      </div>
      <div className="radio-container">
        <input
          id="rb3"
          type="radio"
          name="region"
          value="africa"
          className="radio-input"
          checked={region === "africa"}
          onChange={changeRegion}
        />
        <label htmlFor="rb3" className="radio-label">
          Africa
        </label>
      </div>
      <div className="radio-container">
        <input
          id="rb4"
          type="radio"
          name="region"
          value="europe"
          className="radio-input"
          checked={region === "europe"}
          onChange={changeRegion}
        />
        <label htmlFor="rb4" className="radio-label">
          Europe
        </label>
      </div>
    </div>
  );
}

export default Region;
