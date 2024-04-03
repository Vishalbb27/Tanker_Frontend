import { apiSlice } from "./apiSlice";
import { BASE_URL, USER_URL } from "../constants";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/authenticate`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        // url: `${BASE_URL}`,
        // method: "POST",
        // body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        // url: `${BASE_URL}/logout`,
        // method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
  userApiSlice;
