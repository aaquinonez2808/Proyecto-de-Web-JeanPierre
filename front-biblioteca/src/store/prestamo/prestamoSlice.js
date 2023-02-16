import { createSlice } from '@reduxjs/toolkit';

export const prestamoSlice = createSlice({
    name: 'prestamo',
    initialState: {
        prestamos: [],
        prestamo: {},
        loading: false,
        message: null,

    },
    reducers: {
        saveNewPrestamo: (state, action) => {
            state.prestamos.push(action.payload);
        },
        getListPrestamo: (state, action) => {
            state.prestamos = action.payload.data;
            state.message = action.payload.message;
        },
        getPrestamoOne: (state, action) => {
            state.prestamo = action.payload;
        },
        deletePrestamoOne: (state, action) => {
            state.prestamos = state.prestamos.filter(prestamo => prestamo.id !== action.payload);
        },
        updatePrestamoOne: (state, action) => {
            state.prestamo = action.payload;
            state.prestamos = state.prestamos.map(prestamo => {
                if (prestamo.id === action.payload.id) {
                    return action.payload;
                } else {
                    return prestamo;
                }
            });
        },
        emptyPrestamo: (state, action) => {
            state.prestamo = {};
        }            
    }
});


// Action creators are generated for each case reducer function
export const { saveNewPrestamo, getPrestamoOne, getListPrestamo, deletePrestamoOne, updatePrestamoOne, emptyPrestamo } = prestamoSlice.actions;