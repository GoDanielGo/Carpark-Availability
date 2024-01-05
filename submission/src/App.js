// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import CarparkList from "./components/CarparkList";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.data.gov.sg/v1/transport/carpark-availability")
      .then((response) => {
        setData(response.data.items[0].carpark_data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;

  return <CarparkList data={data} />;
}

export default App;
