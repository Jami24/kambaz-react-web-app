import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";

const defaultCourse = {
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
};

const initialState = {
    courses: courses,
    course: defaultCourse,
};

const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addCourse: (state, { payload: course }) => {
            state.courses = [...state.courses, course] as any;
            state.course = defaultCourse;
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

            state.course = defaultCourse;
        },

        setCourse: (state, { payload: course }) => {
            state.course = course;
        },

        setCourses: (state, { payload: courses }) => {
            state.courses = courses;
        },
    },
});

export const {
    addCourse,
    deleteCourse,
    updateCourse,
    setCourse,
    setCourses,
} = coursesSlice.actions;

export default coursesSlice.reducer;