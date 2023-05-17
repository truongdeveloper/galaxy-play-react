import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import DetailAPI from "../../Api/DetailAPI"

export const fetchMovie = createAsyncThunk('MOVIE_DETAIL', async (id) => {
  const response = await DetailAPI.getFilmDetail(id)
  return response;
});

const initialState = {
  data: {},
  isSuccess: false,
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovie.pending, (state, action) => {
      state.isSuccess = false;
    })
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isSuccess = true;
    })
  },
})

export default movieSlice.reducer;
