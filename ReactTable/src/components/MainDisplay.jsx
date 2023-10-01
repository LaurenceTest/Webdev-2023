import { useState } from "react";
import ContactPopup from "./ContactPopup";
import Table from "./Table";

const MainDisplay = ()=>{
    const [addContactBtn, setAddContactBtn] = useState(false)
    const [updateContactBtn, setUpdateContactBtn] = useState(false)
    const [currentData, setCurrentData] = useState({})

    return(
        <>
            <h1>Contact List</h1>
            <button onClick={()=>setAddContactBtn(true)}>Add Contact</button>
            {!updateContactBtn && addContactBtn && <ContactPopup toggle = {setAddContactBtn} type="Add" current={{}}/>}
            {updateContactBtn && !addContactBtn && <ContactPopup toggle = {setUpdateContactBtn} type="Update" current={currentData}/>}
            <Table {...{operations:{toggle:setUpdateContactBtn,getCurrent:setCurrentData}}}/>
        </>
    )
}

export default MainDisplay