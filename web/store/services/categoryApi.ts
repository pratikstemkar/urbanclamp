import { BACK_URL } from "@/lib/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
    reducerPath: "categoryApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${BACK_URL}/api/categories`,
    }),
    endpoints: builder => ({
        getCategories: builder.query({
            query: () => "",
        }),
        getCategoryById: builder.query({
            query: id => `/${id}`,
        }),
        createCategory: builder.mutation({
            query: category => ({
                url: "",
                method: "POST",
                body: category,
            }),
        }),
        updateCategory: builder.mutation({
            query: ({ id, ...category }) => ({
                url: `/${id}`,
                method: "PUT",
                body: category,
            }),
        }),
        deleteCategory: builder.mutation({
            query: id => ({
                url: `/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useGetCategoriesQuery,
    useGetCategoryByIdQuery,
    useCreateCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,
} = categoryApi;
