import { BACK_URL } from "@/lib/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const paymentApi = createApi({
    reducerPath: "paymentApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${BACK_URL}/api/payments`,
    }),
    endpoints: builder => ({
        createPayment: builder.mutation({
            query: paymentData => ({
                url: "",
                method: "POST",
                body: paymentData,
            }),
        }),
    }),
});

export const { useCreatePaymentMutation } = paymentApi;
