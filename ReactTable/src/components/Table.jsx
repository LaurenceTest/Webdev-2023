import React, {Component} from "react"

class Table extends Component{
    constructor(){
        super()
        this.state = {
            list: {}
        }
    }

    componentDidMount(){
        fetch('https://doited-error.000webhostapp.com/read.php')
        .then(response => response.json())
        .then(response => {
            this.setState({list : response.data})
        })
    }

    render(){
        return(
            <table>
                <tbody>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                    </tr>
                    <TableRow list = {this.state.list} />
                </tbody>
            </table>
        );
    }
}

class TableRow extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: props.list
        }
    }

    componentDidMount(){
        console.warn(this.state.list)
    }

    render(){
        return(
            <tr>
                <td>{this.state.list.lastName}</td>
                <td>bruh</td>
                <td>bruh</td>
                <td>bruh</td>
            </tr>
        );
    }
}

export default Table