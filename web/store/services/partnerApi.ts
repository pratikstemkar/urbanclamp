import { BACK_URL } from "@/lib/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const partnerApi = createApi({
    reducerPath: "partnerApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${BACK_URL}/api/partners`,
    }),
    endpoints: builder => ({
        createPartner: builder.mutation({
            query: credentials => ({
                url: "",
                method: "POST",
                body: credentials,
            }),
        }),
        getPartnerByEmail: builder.query({
            query: email => `/search?email=${email}`,
        }),
    }),
});

export const { useCreatePartnerMutation, useGetPartnerByEmailQuery } =
    partnerApi;
