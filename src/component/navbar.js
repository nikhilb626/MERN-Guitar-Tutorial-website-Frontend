import React,{useState,useEffect,useContext} from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import { logoutUser } from '../service/userAxios';
import AuthContext from "../context/authContext";


const Navbar = () => {

    const navigate=useNavigate();


    const {getLoggedIn,loggedIn,isAdmin}=useContext(AuthContext);



    const [prevScrollPos,setPrevScrollPos]=useState(0);

    const [top,setTop]=useState("navbar");

    const handleScroll=()=>{
        const currentScrollPos=window.pageYOffset;
        
        if(currentScrollPos>prevScrollPos){
            setTop("navbar navHide");
        }else{
            setTop("navbar");

        }

        setPrevScrollPos(currentScrollPos);

    }




    const handleLogout=async(e)=>{
        e.preventDefault();
      try{
        await logoutUser();
        await getLoggedIn();
        navigate("/");
      }
      catch(err){
          console.log(err);
      }
    }


    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);

        return ()=>window.removeEventListener("scroll",handleScroll);
    },[prevScrollPos,top,handleScroll])




    return (
        <>
        <div className={top}>
        <div className="logo">Logo</div>
        <div className="links">
        {
            loggedIn && isAdmin?(<>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/tutorials" activeClassName="active">Tutorials</NavLink>
                <NavLink to="/addTutorial" activeClassName="active" >Add</NavLink>
                <button onClick={handleLogout}>Logout</button>

            </>)
            :loggedIn?(<>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/tutorials" activeClassName="active">Tutorials</NavLink>

                <button onClick={handleLogout}>Logout</button>
            </>)
            :(<>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/login" activeClassName="active">Login</NavLink>

            </>)
        }

          
          
          
          

       
        </div>
        </div>
            
        </>
    )
}

export default Navbar;
