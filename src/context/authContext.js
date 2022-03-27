import React,{useState,useEffect,createContext} from 'react';
import {loggedInUser} from "../service/userAxios";

const AuthContext=createContext();



const AuthContextProvider = (props) => {


    const [loggedIn,setLoggedIn]=useState(undefined);
    const [isAdmin,setisAdmin]=useState(undefined);
    const [classLevel,setClassLevel]=useState("");

    const getLoggedIn=async()=>{
        const loggedInRes=await loggedInUser();
        console.log("loggedIn response- ",loggedInRes.data);

        setLoggedIn(loggedInRes.data);
    }




    const getAdmin=(data)=>{
        setisAdmin(data);
        console.log("succcesful admin data- ",data);
    }


    const getClassLevel=(data)=>{
        setClassLevel(data);
        // console.log("class level is here- ",data);
    }



    useEffect(()=>{
        getLoggedIn();
    },[]);



    return (
        <AuthContext.Provider value={{loggedIn,isAdmin,classLevel,getAdmin,getLoggedIn,getClassLevel}} >
         {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
export {AuthContextProvider};
