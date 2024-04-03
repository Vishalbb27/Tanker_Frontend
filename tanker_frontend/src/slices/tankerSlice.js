import { apiSlice } from "./apiSlice";

export const tankerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    tankerInfo: builder.query({
      query: () => ({
        // url: "",j
      }),
    }),
  }),
});
