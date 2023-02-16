import { createSlice } from '@reduxjs/toolkit';

export const generoSlice = createSlice({
    name: 'genero',
    initialState: {
        generos: [],
        genero: {},
        loading: false,
        message: null,

    },
    reducers: {
        saveNewGenero: (state, action) => {
            state.generos.push(action.payload);
        },
        getListGenero: (state, action) => {
            state.generos = action.payload.data;
            state.message = action.payload.message;
        },
        getGeneroOne: (state, action) => {
            state.genero = action.payload;
        },
        deleteGeneroOne: (state, action) => {
            state.generos = state.generos.filter(genero => genero.id !== action.payload);
        },
        updateGeneroOne: (state, action) => {
            state.genero = action.payload;
            state.generos = state.generos.map(genero => {
                if (genero.id === action.payload.id) {
                    return action.payload;
                } else {
                    return genero;
                }
            });
        },
        emptyGenero: (state, action) => {
            state.genero = {};
        }            
    }
});


// Action creators are generated for each case reducer function
export const { saveNewGenero, getGeneroOne, getListGenero, deleteGeneroOne, updateGeneroOne, emptyGenero } = generoSlice.actions;