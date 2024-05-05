import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchJobsData = createAsyncThunk("fetchJobs", async ({limit,offset}) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit,
    offset,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  const response = await fetch(
    "https://api.weekday.technology/adhoc/getSampleJdJSON",
    requestOptions
  );
  const data = await response.json();
  return data?.jdList;
});

const JobsData = createSlice({
  name: "jobs",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {
    applyFilters: (state, action) => {
      const filters = action.payload;
      state.filteredData = state.data.filter(job => {
        return (
          (!filters.minExperience || job.experience >= filters.minExperience) &&
          (!filters.companyName || job.company.toLowerCase().includes(filters.companyName.toLowerCase())) &&
          (!filters.location || job.location.toLowerCase().includes(filters.location.toLowerCase())) &&
          (!filters.jobRole || job.role.toLowerCase().includes(filters.jobRole.toLowerCase())) &&
          (!filters.techStack || job.techStack.toLowerCase().includes(filters.techStack.toLowerCase())) &&
          (!filters.minBasePay || job.basePay >= filters.minBasePay)
        );
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJobsData.pending,(state,action) =>{
        state.isLoading = true;
    });
    builder.addCase(fetchJobsData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.filteredData = action.payload;
    });
    builder.addCase(fetchJobsData.rejected,(state,action) =>{
        console.log('error',action.payload);
        state.isError = true;
    })
  },
});

export default JobsData.reducer;
