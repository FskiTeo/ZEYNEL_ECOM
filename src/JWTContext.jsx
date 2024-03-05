import React, {createContext, useCallback, useState} from "react";
import Cookies from "universal-cookie";
import axios from "axios";

const JWTContext = createContext("");

export const JWTProvider = ({ children }) => {
    const [jwt, setJwt] = useState('');

    const setToken = (token) => {
        setJwt(token);
    };

    const checkToken = useCallback(() => {
        if (jwt === null || jwt === undefined || jwt === "") {
            const cookies = new Cookies();
            if (cookies.get('refreshToken') !== undefined) {
                axios.post('https://api.escuelajs.co/api/v1/auth/refresh-token', {
                    refreshToken: cookies.get('refreshToken')
                })
                    .then(response => response.data)
                    .then(data => {
                        setToken(data.access_token);
                        cookies.set('refreshToken', data.refresh_token, {path: '/'});
                    })
                    .catch((error) => {
                        cookies.remove('refreshToken')
                        console.error(error)
                    })
            }
        }
    }, [jwt]);

    return (
        <JWTContext.Provider value={{jwt, setToken, checkToken}}>
            {children}
        </JWTContext.Provider>
    );
};

export default JWTContext;