import { BACK_URL } from "@/lib/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serviceApi = createApi({
    reducerPath: "serviceApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${BACK_URL}/api/services`, // Update base URL if needed
    }),
    endpoints: builder => ({
        getServices: builder.query({
            query: () => "",
        }),
        getServiceById: builder.query({
            query: id => `/${id}`,
        }),
        getServiceByCategoryId: builder.query({
            query: id => `/category/${id}`,
        }),
        createService: builder.mutation({
            query: service => ({
                url: "",
                method: "POST",
                body: service,
            }),
        }),
        updateService: builder.mutation({
            query: ({ id, ...service }) => ({
                url: `/${id}`,
                method: "PUT",
                body: service,
            }),
        }),
        deleteService: builder.mutation({
            query: id => ({
                url: `/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useGetServicesQuery,
    useGetServiceByIdQuery,
    useGetServiceByCategoryIdQuery,
    useCreateServiceMutation,
    useUpdateServiceMutation,
    useDeleteServiceMutation,
} = serviceApi;
