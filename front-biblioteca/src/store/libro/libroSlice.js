import { createSlice } from '@reduxjs/toolkit';

export const libroSlice = createSlice({
    name: 'libro',
    initialState: {
        libros: [],
        libro: {},
        loading: false,
        message: null,

    },
    reducers: {
        saveNewLibro: (state, action) => {
            state.libros.push(action.payload);
        },
        getListLibro: (state, action) => {
            state.libros = action.payload.data;
            state.message = action.payload.message;
        },
        getLibroOne: (state, action) => {
            state.libro = action.payload;
        },
        deleteLibroOne: (state, action) => {
            state.libros = state.libros.filter(libro => libro.id !== action.payload);
        },
        updateLibroOne: (state, action) => {
            state.libro = action.payload;
            state.libros = state.libros.map(libro => {
                if (libro.id === action.payload.id) {
                    return action.payload;
                } else {
                    return libro;
                }
            });
        },
        emptyLibro: (state, action) => {
            state.libro = {};
        }            
    }
});


// Action creators are generated for each case reducer function
export const { saveNewLibro, getLibroOne, getListLibro, deleteLibroOne, updateLibroOne, emptyLibro } = libroSlice.actions;