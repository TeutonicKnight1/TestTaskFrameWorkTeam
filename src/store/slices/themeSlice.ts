import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: "dark",
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
            localStorage.setItem("theme", state.theme);
            document.documentElement.setAttribute("theme", state.theme);
        },
    },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;

