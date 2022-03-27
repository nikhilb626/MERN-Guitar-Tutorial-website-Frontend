import React,{useState} from 'react'
import {addContact} from "../service/contactAxios";

const Contact = () => {
        const [username,setUsername]=useState("");
        const [useremail,setUseremail]=useState("");
        const [usermessage,setUsermessage]=useState("");


        const handleSubmit=async(e)=>{
            e.preventDefault();

            try{

                if(username==="" || useremail==="" || usermessage===""){
                    console.log("please fill the form properly")
                }else if(username!=="" && useremail!=="" &&usermessage!==""){
                 const datetime=new Date().toLocaleString();

                 const contactObj={
                     name:username,email:useremail,message:usermessage,currDate:datetime
                 }   

                 await addContact(contactObj);
                 setUsername("");
                 setUseremail("");
                 setUsermessage("");


                }
            }
            catch(err){
                console.log(err);
            }

        }



    return (
        <div className="contact_container">
        <div className="heading">Contact Us</div>

        <div className="form_container">
        <div className="input">
            <label htmlFor="name">Username</label> : 
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
        </div>


        <div className="input">
            <label htmlFor="email">Email</label> : 
            <input type="text" value={useremail} onChange={(e)=>setUseremail(e.target.value)} />
        </div>

        <div className="input">
            <label htmlFor="message">Message</label> : 
        <textarea name="message" value={usermessage} onChange={(e)=>setUsermessage(e.target.value)} id="msg" ></textarea>
        </div>

        
<div className="buttonCont"><button onClick={handleSubmit}>Submit</button></div>

        </div>
        </div>
    )
}

export default Contact;
