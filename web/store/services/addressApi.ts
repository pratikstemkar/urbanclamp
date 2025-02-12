import { BACK_URL } from "@/lib/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const addressApi = createApi({
    reducerPath: "addressApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${BACK_URL}/api/addresses`,
    }),
    keepUnusedDataFor: 0,
    endpoints: builder => ({
        getAddresses: builder.query({
            query: () => "",
            extraOptions: { forceRefetch: true },
        }),
        getAddressById: builder.query({
            query: id => `/${id}`,
            extraOptions: { forceRefetch: true },
        }),
        getAddressesByUserId: builder.query({
            query: userId => `/search?userId=${userId}`,
            extraOptions: { forceRefetch: true },
        }),
        createAddress: builder.mutation({
            query: address => ({
                url: "",
                method: "POST",
                body: address,
            }),
        }),
        updateAddress: builder.mutation({
            query: ({ id, ...address }) => ({
                url: `/${id}`,
                method: "PUT",
                body: address,
            }),
        }),
        deleteAddress: builder.mutation({
            query: id => ({
                url: `/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useGetAddressesQuery,
    useGetAddressByIdQuery,
    useGetAddressesByUserIdQuery,
    useCreateAddressMutation,
    useUpdateAddressMutation,
    useDeleteAddressMutation,
} = addressApi;
