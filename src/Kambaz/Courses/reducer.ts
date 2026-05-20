import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    courses: courses,
    course: {
        _id: "1234",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "/images/reactjs.jpg",
        description: "New Description",
    },
};

const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addCourse: (state) => {
            const newCourse: any = {
                ...state.course,
                _id: uuidv4(),
            };

            state.courses = [...state.courses, newCourse] as any;

            state.course = {
                _id: "1234",
                name: "New Course",
                number: "New Number",
                startDate: "2023-09-10",
                endDate: "2023-12-15",
                image: "/images/reactjs.jpg",
                description: "New Description",
            };
        },

        deleteCourse: (state, { payload: courseId }) => {
            state.courses = state.courses.filter(
                (course: any) => course._id !== courseId
            ) as any;
        },

        updateCourse: (state) => {
            state.courses = state.courses.map((course: any) =>
                course._id === state.course._id ? state.course : course
            ) as any;

            state.course = {
                _id: "1234",
                name: "New Course",
                number: "New Number",
                startDate: "2023-09-10",
                endDate: "2023-12-15",
                image: "/images/reactjs.jpg",
                description: "New Description",
            };
        },

        setCourse: (state, { payload: course }) => {
            state.course = course;
        },
    },
});

export const {
    addCourse,
    deleteCourse,
    updateCourse,
    setCourse,
} = coursesSlice.actions;

export default coursesSlice.reducer;