import { apiSlice } from "./apiSlice";
import { BASE_URL } from "../constants";

export const locationSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    location: builder.query({
      query: ({ latitude, longitude }) => ({
        // url: "",
        // method: "GET",
      }),
    }),
  }),
});

export const { location } = locationSlice;
