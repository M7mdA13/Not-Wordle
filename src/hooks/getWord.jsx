// Code to fetch a random word from the API
import { useState, useEffect } from "react";
import axios from "axios";

// Custom hook
function useWord() {
  const [solution, setSolution] = useState(null);
  useEffect(() => {
    axios
      .get("https://random-word-api.vercel.app/api?words=1&length=5")
      .then((response) => {
        setSolution(response.data[0]);
      })
      .catch((error) => {
        setSolution("error");
        console.error(error);
      });
  }, []);

  return solution;
}

export { useWord };
