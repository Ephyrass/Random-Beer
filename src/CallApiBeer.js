import React, { useState, useEffect } from "react";

const CallApiBeer = () => {
  const [beerData, setBeerData] = useState({});

  const fetchData = async () => {
    const res = await fetch(`https://api.punkapi.com/v2/beers/random`);
    const data = await res.json();
    setBeerData(data[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(beerData);
  return (
    <div>
      {beerData.image_url === null ? (
        <h2>No picture :(</h2>
      ) : (
        <img
          style={{ height: "400px" }}
          src={beerData.image_url}
          alt={beerData.name}
        />
      )}
      <h2>{beerData.name}</h2>

      <p style={{ width: "50%", margin: "auto", padding: "0 5%" }}>
        {beerData.description}
      </p>

      <button className="discover" onClick={() => fetchData()}>
        Discover
      </button>
    </div>
  );
};

export default CallApiBeer;
