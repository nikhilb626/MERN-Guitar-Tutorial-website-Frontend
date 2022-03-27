import React,{useContext} from 'react';
import {Routes,Route} from "react-router-dom";
import Home from './component/home';
import Login from './component/login';
import Tutorials from './component/tutorials';
import Tutorial from './component/tutorial';
import AddTutorial from './component/addTutorial';
import AuthContext from './context/authContext';

const NavRoute = () => {

    const {loggedIn,isAdmin}=useContext(AuthContext);


    return (
        <>
        <Routes>
        {
            loggedIn && isAdmin?(
                <>
                <Route exact path="/" element={<Home />} />

                <Route path="/tutorials" element={<Tutorials />} />
                <Route path="/tutorial/:id" element={<Tutorial />} />

                <Route path="/addTutorial" element={<AddTutorial />} />
                
                </>
            ):loggedIn?(
                <>
                <Route exact path="/" element={<Home />} />

<Route path="/tutorials" element={<Tutorials />} />
<Route path="/tutorial/:id" element={<Tutorial />} />
                </>
            ):(
                <>
                <Route exact path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />
                </>
            )
        }
          
          
           
          
        </Routes>        
        </>
    )
}

export default NavRoute;
