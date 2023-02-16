import { createSlice } from '@reduxjs/toolkit';

export const estudianteSlice = createSlice({
    name: 'estudiante',
    initialState: {
        estudiantes: [],
        estudiante: {},
        loading: false,
        message: null,
    },
    reducers: {
        saveNewEstudiante: (state, action) => {
            state.estudiantes.push(action.payload);
        },
        getListEstudiante: (state, action) => {
            console.log(action.payload);
            state.estudiantes = action.payload.data;
            state.message = action.payload.message;
        },
        getEstudianteOne: (state, action) => {
            state.estudiante = action.payload;
        },
        deleteEstudianteOne: (state, action) => {
            state.estudiantes = state.estudiantes.filter(estudiante => estudiante.id !== action.payload);
        },
        updateEstudianteOne: (state, action) => {
            state.estudiante = action.payload;
            state.estudiantes = state.estudiantes.map(estudiante => {
                if (estudiante.id === action.payload.id) {
                    return action.payload;
                } else {
                    return estudiante;
                }
            });
        },
        emptyEstudiante: (state, action) => {
            state.estudiante = {};
        }            
    }
});


// Action creators are generated for each case reducer function
export const { saveNewEstudiante, getEstudianteOne, getListEstudiante, deleteEstudianteOne, updateEstudianteOne, emptyEstudiante } = estudianteSlice.actions;