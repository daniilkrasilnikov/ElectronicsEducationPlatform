import {configureStore} from '@reduxjs/toolkit'
import schemaReducer from "./lib/stores/SchemaSlice.ts";

export const store = configureStore({
    reducer: {
        schema: schemaReducer,
    },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
