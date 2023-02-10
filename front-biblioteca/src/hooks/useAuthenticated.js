
//Importar el decode del jwt
import jwtDecode from 'jwt-decode'
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';

export const useAuthenticated = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const { setUser } = useContext(UserContext);

    const CheckingAuthenticated = async () => {
        const token = localStorage.getItem('token')
        if (token) {
            const {email, nombre} = jwtDecode(token)
            setUser({email, nombre, token})
            setAuthenticated(true)
        }
    }
    useEffect(() => {
        setLoading(true)
        CheckingAuthenticated();
        setLoading(false)
    }, [])
    return {authenticated, loading, setAuthenticated}
}