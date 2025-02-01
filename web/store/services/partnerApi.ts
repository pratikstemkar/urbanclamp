import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const partnerApi = createApi({
    reducerPath: "partnerApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api/partners",
    }),
    endpoints: builder => ({
        createPartner: builder.mutation({
            query: credentials => ({
                url: "",
                method: "POST",
                body: credentials,
            }),
        }),
    }),
});

export const { useCreatePartnerMutation } = partnerApi;
