import logo from "./logo.svg";
import JobCards from "./components/jobCards/jobCards";
import { useEffect, useState } from "react";
import JobList from "./components/jobLists/jobList";
import FilterTabs from "./components/filterTabs/filtertabs";
import { useDispatch,useSelector } from "react-redux";
import { fetchJobsData } from "./features/jobData/jobDataSlice";
import { CircularProgress, styled } from "@mui/material";
import Box from "@mui/material/Box";

function App() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state?.jobs.isLoading);
  const state = useSelector((state) => state)
  const [offset, setOffset] = useState(0);
  const limit = 8;


  const CircularLoading = () => (
    <>
      <CircularProgress
        size={70}
        sx={{
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2
        }}
      />

    </>
  );

  useEffect(() => {
    console.log("Fetching data...")
    dispatch(fetchJobsData({offset,limit}))
  }, [offset]);


  const handleScroll = () => {
    console.log("Scrolled!");
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.offsetHeight;
    if (scrollTop + windowHeight >= documentHeight - 100 && !loading) {
      setOffset((prevOffset) => prevOffset + limit);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if(loading){
    return(
      <div>
        <CircularLoading />
      </div>
    )
  }

  return <div>
    {/* <FilterTabs /> */}
    {state?.jobs?.data && 
    <JobList jobs={state?.jobs?.data} />
  }
  {loading&& <div>
    <CircularLoading />
    </div>}
  </div>;
}

export default App;
