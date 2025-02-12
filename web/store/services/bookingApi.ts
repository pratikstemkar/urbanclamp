import { BACK_URL } from "@/lib/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookingApi = createApi({
    reducerPath: "bookingApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${BACK_URL}/api/bookings`,
    }),
    keepUnusedDataFor: 0,
    endpoints: builder => ({
        getBookings: builder.query({
            query: () => "",
            extraOptions: { forceRefetch: true },
        }),
        getBookingById: builder.query({
            query: id => `/${id}`,
            extraOptions: { forceRefetch: true },
        }),
        getBookingsByUserId: builder.query({
            query: userId => `/search/user?userId=${userId}`,
            extraOptions: { forceRefetch: true },
        }),
        getBookingsByPartnerId: builder.query({
            query: partnerId => `/search/partner?partnerId=${partnerId}`,
            extraOptions: { forceRefetch: true },
        }),
        getBookingsByServiceId: builder.query({
            query: serviceId => `/search/service?serviceId=${serviceId}`,
            extraOptions: { forceRefetch: true },
        }),
        createBooking: builder.mutation({
            query: booking => ({
                url: "",
                method: "POST",
                body: booking,
            }),
        }),
        updateBooking: builder.mutation({
            query: ({ id, ...booking }) => ({
                url: `/${id}`,
                method: "PUT",
                body: booking,
            }),
        }),
        deleteBooking: builder.mutation({
            query: id => ({
                url: `/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useGetBookingsQuery,
    useGetBookingByIdQuery,
    useGetBookingsByUserIdQuery,
    useGetBookingsByPartnerIdQuery,
    useGetBookingsByServiceIdQuery,
    useCreateBookingMutation,
    useUpdateBookingMutation,
    useDeleteBookingMutation,
} = bookingApi;
