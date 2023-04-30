import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const searchMovies = createAsyncThunk(
  "movies/searchMovie",
  async (title: string) => {
    const response = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=a70530df&s=${title}`
    );
    const data = await response.json();
    if (data.Response === "True") {
      return data;
    } else {
      throw new Error(data.Error);
    }
  }
);





const moviesSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state : any, action) => {
        // handle pending state
        console.log("pending");
      })
      .addCase(searchMovies.fulfilled, (state: any, action) => {
        console.log("fulfilled");
        return action.payload;
      })
      .addCase(searchMovies.rejected, (state: any, action) => {

        console.log("rejected");

      });
  },
});

export const selectMovies = (state: any) => state.movies;
export default moviesSlice.reducer;
