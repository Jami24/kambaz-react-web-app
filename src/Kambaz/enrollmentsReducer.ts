import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    enrollments: [],
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
        },

        enroll: (state, { payload }) => {
            state.enrollments = [
                ...state.enrollments,
                payload,
            ] as any;
        },

        unenroll: (state, { payload }) => {
            state.enrollments = state.enrollments.filter(
                (enrollment: any) =>
                    !(
                        enrollment.user === payload.user &&
                        enrollment.course === payload.course
                    )
            ) as any;
        },
    },
});

export const {
    setEnrollments,
    enroll,
    unenroll,
} = enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;