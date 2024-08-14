
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../api/users";
import { message, Menu, Layout } from "antd";

function ProtectedRoute({ children }) {

    const navigate = useNavigate();


    const getValidUser = async () => {
        try {
            const response = await GetCurrentUser();
            console.log(response);
            // setUser(response.data);
            // navigate('/login');
        } catch (error) {
            console.log(error);
            message.error(error.message);
        }
    }
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getValidUser();
        } else {
            navigate('/login');
        }
    }, [])


    return (
        <div>{children}</div>
    )
}

export default ProtectedRoute