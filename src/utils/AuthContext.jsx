import axios from 'axios';
import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import loadingImg from "../assets/images/loading.gif"
import "./Loading.css";

const AuthContext = createContext()

export const AuthProvider = ({ children }) =>{
    const navigate = useNavigate()

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)

    useEffect(()=>{
        checkUserStatus()
    },[])
    const loginUser = async (userInfo) =>{
        setLoading(true)
        try{
            const response = await axios.post("https://my-music-sfte.onrender.com/api/login/", userInfo)
            const currentUser = await response.data
            sessionStorage.setItem("userInfo", currentUser.token)
            setUser(currentUser)
            navigate("/")
        }catch(error){
            alert("Login error")
        }
        setLoading(false)
    }
    const logoutUser = () =>{
        sessionStorage.removeItem("userInfo")
        setUser(null)
        navigate("/login")
    }
    const registerUser = async (userInfo) =>{
        setLoading(true)
        try{
            await axios.post("https://my-music-sfte.onrender.com/api/user/", userInfo)
            navigate("/login")
        }catch(error){
            alert("Error with Registration")
        }
        setLoading(false)
    }
    const checkUserStatus = () =>{
        setLoading(false)

        
    }

    const contextData = {
        user,
        logoutUser,
        loginUser,
        registerUser
    }
    return (
    <AuthContext.Provider value={contextData}>
        { loading ? <div className='loading__bar'>
            <h1><img src={loadingImg} alt="loading" /></h1>
        </div> : children }
    </AuthContext.Provider>
    )
}
export const useAuth = ()=>{return useContext(AuthContext)}
export default AuthContext