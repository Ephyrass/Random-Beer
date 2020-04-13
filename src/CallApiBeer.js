import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  beer: {},
  loading: true,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "succes":
      return {
        beer: action.payload,
        loading: false,
      };
    case "failed":
      return {
        error: "There is an error, try again.",
        loading: false,
      };
    default:
      return state;
  }
};

const CallApiBeer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = () => {
    axios(`https://api.punkapi.com/v2/beers/random`)
      .then((res) => {
        dispatch({ type: "succes", payload: res.data[0] });
      })
      .catch((error) => {
        dispatch({ type: "failed" });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(state.beer);
  return (
    <div>
      {state.loading ? (
        "Loading..."
      ) : (
        <div>
          {state.beer.image_url === null ? (
            <h2>No picture :(</h2>
          ) : (
            <img
              style={{ height: "400px" }}
              src={state.beer.image_url}
              alt={state.beer.name}
            />
          )}
          <h2>{state.beer.name}</h2>
          <p style={{ width: "50%", margin: "auto", padding: "0 5%" }}>
            {state.beer.description}
          </p>
          <button className='discover' onClick={() => fetchData()}>
            Discover
          </button>
        </div>
      )}
      {state.error ? state.error : null}
    </div>
  );
};

export default CallApiBeer;
