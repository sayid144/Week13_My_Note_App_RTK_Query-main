import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const BASE_URL = "http://localhost:9000";

export const noteSlice = createApi({
    //set up

    reducerPath: "note",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    tagTypes: "notes",

    //end point
    endpoints: (builder) => ({
        //fetch notes
        fetchNotes: builder.query({
            query: () => {
                return {
                    url: "notes",
                    method: "GET"
                }
            },
            providesTags: ["notes"]

        }),
        //add note to the form
        addNote: builder.mutation({
            query: (newNote) => ({
                url: "create_note",
                method: "POST",
                body: newNote
            }),
            invalidatesTags: ["notes"]

        }),

        //edit the existing notes
        editNote: builder.mutation({
            query: ({ id, updatedNote }) => ({
                url: `update_note/${id}`,
                method: "PUT",
                body: updatedNote
            }),
            invalidatesTags: ["notes"]

        }),
        //delete existing notes
        deleteNote: builder.mutation({
            query: (id) => ({
                url: `delete_note/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["notes"]
        })


    })

})

export const { useFetchNotesQuery, useAddNoteMutation, useEditNoteMutation, useDeleteNoteMutation } = noteSlice
