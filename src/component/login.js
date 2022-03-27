import React,{useState,useContext} from 'react';
import Navbar from './navbar';
import {addUser,loginUser} from "../service/userAxios";
import AuthContext from "../context/authContext";
import {useNavigate} from "react-router-dom";

const Login = () => {


    const {getLoggedIn,getAdmin,getClassLevel}=useContext(AuthContext);

    const navigate=useNavigate();

    const [formClass,setFormClass]=useState("form hide");
    const [form2Class,setForm2Class]=useState("form");

    const showLogin=(e)=>{
        e.preventDefault();
        setFormClass("form hide");
        setForm2Class("form");
    }

    const showSignup=(e)=>{
        e.preventDefault();
        setFormClass("form");
        setForm2Class("form hide");
    }





    // registeration
    const [regname,setRegname]=useState("");
    const [regemail,setRegemail]=useState("");
    const [regclass,setRegclass]=useState("");
    const [regpassword,setRegpassword]=useState("");
    const [regcpassword,setRegcpassword]=useState("");



    const handleRegister=async(e)=>{
        e.preventDefault();

        try{

            if(regname==="" || regemail==="" || regclass==="" || regpassword==="" || regcpassword===""){
                console.log("please fill the form properly");
            }
            else if(regname!=="" && regemail!=="" && regclass!=="" && regpassword!=="" && regcpassword!==""){
                if(regpassword!==regcpassword){
                    console.log("confirm password does not match");
                }
                else{
                    const regObj={
                        name:regname,email:regemail,classLevel:regclass,password:regpassword
                    }

                    await addUser(regObj);
                    setRegname("");
                    setRegemail("");
                    setRegclass("");
                    setRegpassword("");
                    setRegcpassword("");
                    setFormClass("form hide");
                    setForm2Class("form");
                }
            }


        }
        catch(err){
            console.log(err);
        }
    }



    
    // login
    const [logemail,setLogemail]=useState("");
    const [logpassword,setLogpassword]=useState("");


    const handleLog=async(e)=>{
        e.preventDefault();
        try{
            if(logemail==="" || logpassword===""){
                console.log("please fill the form properly");
            }

            else if(logemail!=="" && logpassword!==""){
                const logObj={
                    email:logemail,password:logpassword
                }
                
                const loggedUserDetail=await loginUser(logObj);
                setLogemail("");
                setLogpassword("");
                // console.log("this is admin ? ",loggedUserDetail.data.isAdmin);
                await getAdmin(loggedUserDetail.data.isAdmin);
                await getClassLevel(loggedUserDetail.data.classLevel);
                
                await getLoggedIn();
                navigate("/");

            }

        }
        catch(err){
            console.log(err);
        }
    }





    return (
        <div className="loginPage">
        <Navbar />
        
        <fieldset className={formClass}>
            <legend>Sign Up</legend>
            <input type="text" placeholder="Enter Name" value={regname} onChange={(e)=>setRegname(e.target.value)} />
            <input type="email" placeholder="Enter Email" value={regemail} onChange={(e)=>setRegemail(e.target.value)}/>
            <select name="classType" id="class" value={regclass} onChange={(e)=>setRegclass(e.target.value)}>
            <option value="none" selected>select classes</option>
                <option value="1">Beginner level</option>
                <option value="2">Intermediate level</option>
                <option value="3">Advance level</option>
            </select>
        
        
        
        <input type="password" placeholder="Enter Password"  value={regpassword} onChange={(e)=>setRegpassword(e.target.value)}/>
            <input type="password" placeholder="Confirm Password" value={regcpassword} onChange={(e)=>setRegcpassword(e.target.value)} />


            <input onClick={handleRegister} type="submit" value="Register" />
            
        <div className="form_link">
            Already an Account ?  <div className="clickForm" onClick={showLogin}> Login</div>
        </div>


        </fieldset>




        <fieldset className={form2Class}>
            <legend>Login</legend>
            <input type="email" value={logemail} onChange={(e)=>setLogemail(e.target.value)} placeholder="Enter Email" />

            <input type="password" value={logpassword} onChange={(e)=>setLogpassword(e.target.value)} placeholder="Enter Password" />
           
            <input type="submit" onClick={handleLog} value="Log In" />
            
        <div className="form_link">
            Create an Account ?  <div className="clickForm" onClick={showSignup}> Sign Up</div>
        </div>


        </fieldset>




        </div>
    )
}

export default Login;
