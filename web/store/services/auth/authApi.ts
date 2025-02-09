import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.urbanclamp.xyz/api/auth",
    }),
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: "/login",
                method: "POST",
                body: credentials,
            }),
        }),
        register: builder.mutation({
            query: credentials => ({
                url: "/register",
                method: "POST",
                body: credentials,
            }),
        }),
        validateToken: builder.query({
            query: token => ({
                url: `/validate/${token}`,
                method: "GET",
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useValidateTokenQuery } =
    authApi;
