import React,{useEffect,useContext,useState} from 'react';
import Navbar from './navbar';
import {Link} from "react-router-dom";
import AuthContext from "../context/authContext";
import {getTutorials} from "../service/tutAxios";


const Tutorials = () => {

    const {classLevel}=useContext(AuthContext);

    const [tutorials,setTutorials]=useState([]);


    const getTut=async()=>{
        const TutorialRes=await getTutorials(classLevel);
        console.log("this is response of tutorial- ",TutorialRes.data);
        setTutorials(TutorialRes.data);
    }

    useEffect(()=>{
        getTut();
    },[])



    return (
        <div className="tutorialsPage">
        <Navbar />
    <div className="list_container">
        <div className="heading">Playlist</div>
        <ol>
        {
            tutorials.map((tut)=>{
                return (<>
                    <li><Link to={`/tutorial/${tut._id}`}>lecture: {tut.title}</Link></li>
                </>)
            })
        }

            {/* <li><Link to="/tutorial/:id">lecture:introductory class about guitar</Link></li>
            <li><Link to="/tutorial/:id">lecture:all about guitar body parts</Link></li>
            <li><Link to="/tutorial/:id">lecture:All about scales</Link></li> */}
            
        </ol>
    </div>
        </div>
    )
}

export default Tutorials;
