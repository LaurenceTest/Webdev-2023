import { useState, useEffect } from "react"
import  React  from "react"

const Table = ({operations:{toggle,getCurrent}})=>{
    const [retData,setRetData] = useState({})

    useEffect(()=>{
        fetch('https://todolist-sample.000webhostapp.com/read.php')
        .then(response=>response.json())
        .then(response=>setRetData(response.data))
    })

    const deleteRow = (id)=>{
        fetch('https://todolist-sample.000webhostapp.com/delete.php',{
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/x-www-form-urlencoded"
            }),
            body: "id=" + id
        })
    }

    return(
            <table>
                <thead>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(retData).map(key=>{
                            return(
                                <TableRow key={key + "tr"} {...{list:retData[key],operations:{deleteRow:deleteRow,getCurrent:getCurrent,toggle:toggle}}} />
                            )
                        })
                    }
                </tbody>
            </table>
    )
}

const TableRow = ({list,operations:{deleteRow, toggle, getCurrent}})=>{
    return(
            <tr>
                <td>{list.lastName}</td>
                <td>{list.firstName}</td>
                <td>{list.email}</td>
                <td>{list.number}</td>
                <td><button className="updatebtn" onClick={() => {toggle(true);getCurrent(list)}}>Update</button></td>
                <td><button className="deletebtn"onClick={() => deleteRow(list.id)}>Delete</button></td>
            </tr>
    )
}

export default Table