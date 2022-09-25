import "./App.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const data = await (await fetch(url)).json();
      setIsLoading(false);
      setTours(data);
    } catch (e) {
      setIsLoading(false);
      console.error(e.message);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  isLoading && (
    <main>
      <Loading />
    </main>
  );

  tours.length === 0 && (
    <main>
      <div className="title">
        <h2>No tours available.</h2>
        <button className="btn" onClick={() => fetchTours()}>
          Refresh
        </button>
      </div>
    </main>
  );

  return (
    <main>
      <Tours removeTour={removeTour} tours={tours} />
    </main>
  );
};

export default App;
