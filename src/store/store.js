import { configureStore } from "@reduxjs/toolkit";
import fruitsReducer from "../features/fruitsSlice";

export default configureStore({
    reducer: {
        fruits: fruitsReducer
    }
})