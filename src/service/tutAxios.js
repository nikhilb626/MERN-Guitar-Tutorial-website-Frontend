import axios from "axios";

const tutorialUrl=`http://localhost:5000/tutorialApi`;


export const addVideo=async(Data,config)=>{
    return await axios.post(`${tutorialUrl}/addVideo`,Data,config);
}


export const addWholeTutorial=async(data)=>{
    return await axios.post(`${tutorialUrl}/addTuts`,data);
}



export const getTutorials=async(classLevel)=>{
    return await axios.get(`${tutorialUrl}/showTutorials/${classLevel}`);
}


export const getTutorial=async(id)=>{
    return await axios.get(`${tutorialUrl}/showTutorial/${id}`);
}