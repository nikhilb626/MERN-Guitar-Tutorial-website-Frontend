import React,{useEffect,useState} from 'react';
import Navbar from './navbar';
import { useNavigate,useParams } from 'react-router-dom';
import {getTutorial} from "../service/tutAxios";

const Tutorial = () => {

    const {id}=useParams();

    const [tutorial,setTutorial]=useState({});
    const [video,setVideo]=useState("");

    const getTut=async()=>{
        const tutRes=await getTutorial(id);
        // console.log("this is tutorial ind Detail- ",tutRes.data[0].video);
        setTutorial(tutRes.data[0]);
        setVideo(tutRes.data[0].video.slice(20));
        
        

    }



    useEffect(()=>{
        getTut();
    },[])



    const navigate=useNavigate();

    const handleBack=()=>{
        navigate("/tutorials");
    }


    return (
        <div className="tutorialPage">
        <Navbar />
        <div className="backLink" onClick={handleBack}>back</div>
        <div className="title">{tutorial.title}</div>
       <div className="video_container">

       <video src={`\\${video}`}
       controls ></video>

       {/* <img src={`\\${video}`} width="380" height="500"  alt="sdfh" /> */}


      


<div className="description">
{tutorial.description}
</div>
       </div>
        </div>
    )
}

export default Tutorial;
