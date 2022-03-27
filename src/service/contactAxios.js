import axios from "axios";

const contactUrl=`http://localhost:5000/contactApi`;


export const addContact=async(Contact)=>{
    return await axios.post(`${contactUrl}/add`,Contact);
}