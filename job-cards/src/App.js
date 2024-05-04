import logo from "./logo.svg";
import JobCards from "./components/jobCards/jobCards";
import { useEffect, useState } from "react";
import JobList from "./components/jobLists/jobList";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit: 10,
    offset: 0,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      const data = await response.json();
      setJobs(data.jdList); // Assuming the response has a 'jobs' array
    } catch (error) {
      console.error(error);
    }
  };

  return <div className="App">
    <JobList jobs={jobs} />
  </div>;
}

export default App;
