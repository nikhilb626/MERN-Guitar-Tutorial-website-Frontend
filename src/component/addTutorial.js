import React,{useState} from 'react';
import Navbar from './navbar';
import { addVideo,addWholeTutorial } from '../service/tutAxios';
import {useNavigate} from "react-router-dom";

const AddTutorial = () => {

    const navigate=useNavigate();


    const [filePath,setFilePath]=useState("");
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [classLevel,setClassLevel]=useState("");



    



    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        // console.log(file);
        try {
            const bodyFormData = new FormData();
            const config={
                header:{'content-type':'multipart/form-data'}
            }
            bodyFormData.append('file', file);
            const videoResponse=await addVideo(bodyFormData,config);

            console.log("this is video response",videoResponse.data);

            if(videoResponse.data){
            
                console.log("this is the filepath- ",videoResponse.data);
            setFilePath(videoResponse.data);



            }else{
                alert("failed to save the video in server");
            }

        } catch (error) {
            console.log(error);
        }
      };




      const handleSubmit=async(e)=>{
          e.preventDefault();
        try{
            if(filePath==="" || title==="" || description==="" || classLevel===""){
                console.log("please fill the form properly");
            }
            else if(filePath!=="" && title!=="" && description!=="" && classLevel!==""){
                const timing=new Date().toLocaleString();

                const uploadObj={
                    title:title,
                    video:filePath,description:description,classLevel:classLevel,
                    uploadDateTime:timing
                }

                // console.log(uploadObj);
                await addWholeTutorial(uploadObj);
                setTitle("");
                setFilePath("");
                setDescription("");
                setClassLevel("");
                navigate("/tutorials")

            }

        }
        catch(err){
            console.log(err);
        }

      }


    return (
        <div className="addTutorialPage">
        <Navbar />
          
        <fieldset className="form">
            <legend>Tutorial Form</legend>


            <input type="text" placeholder="Enter Title"  value={title} onChange={(e)=>setTitle(e.target.value)} />


            <input type="file" 
            id="video_file"
            onChange={uploadFileHandler}
            className="custom-file-input"  />


            <textarea name="description" id="" cols="30" rows="10" placeholder="Enter Description" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
 
 
 
 
            <select name="classType" id="class" onChange={(e)=>setClassLevel(e.target.value)} >
            <option value="none" selected>select classes</option>
                <option value="1">Beginner level</option>
                <option value="2">Intermediate level</option>
                <option value="3">Advance level</option>
            </select>
        
    



            <input type="submit" value="Add Tutorial" onClick={handleSubmit} />
            
    

        </fieldset>



        </div>
    )
}

export default AddTutorial;
