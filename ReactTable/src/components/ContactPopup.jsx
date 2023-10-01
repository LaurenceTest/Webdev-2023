import React, { useState,useEffect } from "react";
import { validContactNum, validEmail, validName } from "./RegexpConst";

const ContactPopup = ({toggle,type,current})=>{
    const [fNameValidity,setFNameValidity] = useState({valid:true,errMsg:""})
    const [lnameValidity,setLNameValidity] = useState({valid:true,errMsg:""})
    const [emailValidity,setEmailValidity] = useState({valid:true,errMsg:""})
    const [cNumberValidity,setCNumberValidity] = useState({valid:true,errMsg:""})

    function addContact(fName,lName,email,contactNumber){
        fetch('http://192.168.191.12/ContactListBackendPHP/add.php',{
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/x-www-form-urlencoded"
            }),
            body: `fname=${fName}&lname=${lName}&emailAdd=${email}&contactNum=${contactNumber}`
        })
    }

    function updateRow(id,fname,lname,emailAdd,contactNum,email){
        fetch('http://192.168.191.12/ContactListBackendPHP/edit.php',{
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/x-www-form-urlencoded"
            }),
            body:`id=${id}&fname=${fname}&lname=${lname}&emailAdd=${emailAdd}&contactNum=${contactNum}&curEmail=${email}`
        })
    }

    function defCheck(input){
        return current ? current[input] : ""
    }

    /**
     * 
     * @param {FormEvent} event 
     */
    function submitHandler(event){
        const {
            target:{0:{value:lName}},
            target:{1:{value:fName}},
            target:{2:{value:email}},
            target:{3:{value:contactNumber}}
        } = event
        event.preventDefault()
        if(validityCheck(lName,fName,email,contactNumber)){
            if(type === "Update") updateRow(current.id,fName,lName,email,contactNumber,current.email)
            else addContact(fName,lName,email,contactNumber)
            toggle(false)
        }
    }// MUST PUT PROPER REGEX
    
    function validityCheck(lName,fName,email,contactNumber){
        let valid = true

        if(!validName.test(lName)){
            setLNameValidity({valid:false,errMsg:"Invalid Last Name"})
            valid = false
        }
        else setLNameValidity({valid:false,errMsg:""})

        if(!validName.test(fName)){
            setFNameValidity({valid:false,errMsg:"Invalid First Name"})
            valid = false
        }
        else setFNameValidity({valid:true,errMsg:""})

        if(!validEmail.test(email)){
            setEmailValidity({valid:false,errMsg:"Invalid Email"})
            valid = false
        }
        else setEmailValidity({valid:true,errMsg:""})

        if(!validContactNum.test(contactNumber)){
            setCNumberValidity({valid:false,errMsg:"Invalid Contact Number"})
            valid = false
        }
        else setCNumberValidity({valid:true,errMsg:""})

        return valid
    }

    return(
        <div className="contactPopup">
            <button onClick={()=>toggle(false)}>X</button>
            <form action="post" className="contactForm" onSubmit={submitHandler}>
                <input type="text" defaultValue={defCheck("lastName")} placeholder="Last Name"/>
                {!lnameValidity.valid && <RegExpErrorMsg errorMsg = {lnameValidity.errMsg}/>}
                <input type="text" defaultValue={defCheck("firstName")} placeholder="First Name"/>
                {!fNameValidity.valid && <RegExpErrorMsg errorMsg = {fNameValidity.errMsg}/>}
                <input type="email" defaultValue={defCheck("email")} placeholder="Email"/>
                {!emailValidity.valid && <RegExpErrorMsg errorMsg = {emailValidity.errMsg}/>}
                <input type="text" defaultValue={defCheck("number")} placeholder="Contact Number"/>
                {!cNumberValidity.valid && <RegExpErrorMsg errorMsg = {cNumberValidity.errMsg}/>}
                <button type="submit">{type} Contact</button>
            </form>
        </div>
    )
}

export default ContactPopup

const RegExpErrorMsg = ({errorMsg})=>{
    return (
        <p className = "regexpErr">{errorMsg}</p>
    )
}