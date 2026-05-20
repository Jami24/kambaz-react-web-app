import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "./Database";

const initialState = {
    enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        enroll: (state, { payload }) => {
            state.enrollments = [
                ...state.enrollments,
                {
                    _id: new Date().getTime().toString(),
                    user: payload.user,
                    course: payload.course,
                },
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

export const { enroll, unenroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;