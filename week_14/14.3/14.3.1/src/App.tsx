import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    username: "",
    name: "",
  });

  useEffect(() => {
    axios
      .get(
        "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details",
      )
      .then((response) => {
        setData(response.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return "loading ...";
  }

  return (
    <div>
      {data.username}
      {data.name}
    </div>
  );
}

export default App;
