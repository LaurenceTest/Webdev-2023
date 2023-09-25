let Global_update_index

function open_popup_element(id){
    // const popup = document.getElementById(id)
    // popup.style.display = "flex"
    const row = document.createElement("tr");
    switch(id){
        case `add_contact_popup` : 
            row.innerHTML(`
            <div id="add_contact_popup">
                <h2>Create New Contact</h2>
                <form onsubmit="return false">
                    <input type="text" placeholder="Last Name" id="last_name" required>
                    <input type="text" placeholder="First Name" id="first_name" required>
                    <input type="email" placeholder="Email Address" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$" required>
                    <input type="text" placeholder="Contact" id="contact" pattern="[0-9]{11}" required>
                    <button type="submit" onclick="verify_information('add')">Create Contact</button>
                </form>
            </div>
            `)
            document.getElementsByTagName[0].appendChild(row)
            break
        case `update_contact_popup` :
            row.innerHTML(`
            <div id="update_contact_popup">
                <h2>Update Contact</h2>
                <form onsubmit="return false">
                    <input type="text" placeholder="Last Name" id="last_name_update" required>
                    <input type="text" placeholder="First Name" id="first_name_update" required>
                    <input type="email" placeholder="Email Address" id="email_update" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$" required>
                    <input type="text" placeholder="Contact" id="contact_update" pattern="[0-9]{11}" required>
                    <button type="submit" onclick="verify_information('update')">Update Contact</button>
                </form>
            </div>
            `)
            document.getElementsByTagName[0].appendChild(row)
            break
    }
}

function close_popup_element(id){
    // const popup = document.getElementById(id)
    // popup.style.display = "none"
    document.getElementById(id).remove()
}

function verify_information(type){
    const information = credential_names()
    for(let property of information){
        if(!document.getElementById(type === `update` ? `${property}_update` : property).checkValidity()){
            return
        }
    }
    switch(type){
        case `add`: add_contact(); break
        case `update`: update_contact(); break
    }
}

function add_contact(){
    const information = credential_names()
    const new_row = (document.getElementById("table")).insertRow()
    information.forEach(property=>{
        const cell = new_row.insertCell()
        cell.innerText = document.getElementById(property).value
    })
    const buttons = new_row.appendChild(document.createElement("div"))
    buttons.setAttribute("class","action_holder")
    buttons.appendChild(new_button(`Update`,`init_update_contact(this)`))
    buttons.appendChild(new_button(`Delete`,`delete_contact(this)`))
    information.forEach(property=>{
        document.getElementById(property).value = ""
    })
    close_popup_element("add_contact_popup")
}

function new_button(text,method){
    const button = document.createElement("button")
    button.setAttribute("onclick",method)
    button.innerText = text
    return button
}

function init_update_contact(button){
    const information = credential_names()
    const row_index = button.parentNode.parentNode.rowIndex
    const row = document.getElementById(`table`).rows[row_index]
    Global_update_index = row_index

    for(let i = 0; i < 4; i++){
        const input = document.getElementById(`${information[i]}_update`)
        input.setAttribute("value",row.childNodes[i].innerText)
    }

    open_popup_element(`update_contact_popup`)
}

function update_contact(){
    const information = credential_names();
    const row = document.getElementById(`table`).rows[Global_update_index]
    
    information.forEach((property,index)=>{
        row.childNodes[index].innerText = document.getElementById(`${property}_update`).value
    })
    close_popup_element(`update_contact_popup`)
}

function delete_contact(button){
    document.getElementById("table").deleteRow(button.parentNode.parentNode.rowIndex)
}

function credential_names(){
    return ["last_name","first_name","email","contact"]
}

function get_initial_contacts(){

}