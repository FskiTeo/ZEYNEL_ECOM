import {useContext, useEffect, useState} from "react";
import JWTContext from "../JWTContext";
import {useNavigate} from "react-router-dom";
import axios from "axios";


import ProfilePage from "../Components/ProfilePage";

export default function Profile() {
    const {jwt, checkToken} = useContext(JWTContext);
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    checkToken();

    useEffect(() => {
         function fetchUserData() {
            axios.get('https://api.escuelajs.co/api/v1/auth/profile', {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
                .then(response => response.data)
                .then(data => {
                    setUserData(data);
                })
                .catch((error) => {
                    console.log('Erreur dans le fetchUserData');
                })

        }

        if (jwt !== "") {
            fetchUserData();
        } else {
            navigate('/login')
        }
    }, [jwt, navigate])

    return (<div>
        {<ProfilePage userData={userData}/>}
    </div>)
}