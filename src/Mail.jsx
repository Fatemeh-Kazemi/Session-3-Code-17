import { Component } from "react";

class Mail extends Component{

    constructor(){
        super()
        this.state={
            email: "kazemifk484@gmail.com",
            address: "Ladan 2"
        }
    }

    render(){
        return(
            <div>
                <div>{this.state.email}</div>
                <div>{this.state.address}</div>
            </div>
        )
    }
}


export default Mail