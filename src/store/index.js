import { configureStore } from '@reduxjs/toolkit'
import { noteSlice } from '../store/api/NoteSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
  reducer: {
    //notes: NoteReducer
    [noteSlice.reducerPath]: noteSlice.reducer

  },
  //middle ware
  middleware: (getDefaultMiddleare) =>
    getDefaultMiddleare().concat(noteSlice.middleware)
})
setupListeners(store.dispatch)