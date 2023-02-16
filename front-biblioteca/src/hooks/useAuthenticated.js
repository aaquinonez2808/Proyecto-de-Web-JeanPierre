
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/auth/authSlice';
import decode from 'jwt-decode';
import { getListEstudiantes } from '../store/estudiante/thunks';
import { getListGeneros } from '../store/genero/thunks';
import { getListLibros } from '../store/libro/thunks';
import { getListPrestamos } from '../store/prestamo/thunks';


export const useCheckAuth = () => {
    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const {email, nombre} = decode(token);
            dispatch( login({email, nombre}));
            dispatch( getListEstudiantes() );
            dispatch( getListGeneros() );
            dispatch( getListLibros() );
            dispatch(getListPrestamos())
        } else {
            dispatch( logout() );
        }
    }, []);

    return status;
}