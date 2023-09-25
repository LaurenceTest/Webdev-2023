import React, {Component} from "react"
import Table from "./Table";

class MainDisplay extends Component{
    constructor(){
        super()
        this.state = {
            test : "test"
        }
    }

    render(){
        return(
            <div>
                <h1>Contact List</h1>
                <Table/>
            </div>
        );
    }
}

export default MainDisplay