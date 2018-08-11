// Get DEFAULT STATE
// SET INITIAL STATE
// BEFORE GET CREATED
// RENDER JSX
// AFTER A COMPONENT IS MOUNTED
// WHEN COMPONENT DESTROY

import React, { Component } from 'react';

class Lifecycle extends Component{
    // Get DEFAULT STATE
    constructor(props){
        super(props)

        // SET INITIAL STATE
        this.state = {
            title: "Making Lifecycle"
        }

    }

    // BEFORE GET CREATED
    componentWillMount(){
        console.log("before created");
        
    }
    // RENDER JSX
    render(){
        return (
            <div>
                <h4>{this.state.title}</h4>
            </div>
        )
    }

    // AFTER A COMPONENT IS MOUNTED
    componentDidMount(){
        console.log("after created")
        document.querySelector('h4').style.color="red"
    }

    componentWillUnmount(){
        alert("do you want to leave")
    }


}

export default Lifecycle;
