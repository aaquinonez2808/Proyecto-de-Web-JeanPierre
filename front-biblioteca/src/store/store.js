
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { estudianteSlice } from './estudiante/estudianteSlice';
import { generoSlice } from './genero/generoSlice';
import { libroSlice } from './libro/libroSlice';
import { prestamoSlice } from './prestamo/prestamoSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    estudiante: estudianteSlice.reducer,
    genero: generoSlice.reducer,
    libro: libroSlice.reducer,
    prestamo: prestamoSlice.reducer,
  },
});