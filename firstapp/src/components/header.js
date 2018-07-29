import React, { Component } from 'react';

class Header extends Component{

    inputchange(event){
        console.log(event.target.value)
    }
    render(){
        return(
            <header className="header">
                <div className="logo"
                onClick={()=>console.log("hii")}>Logo</div>
                <center>
                    <input placeholder="Enter your Search.."
                        onChange={this.inputchange}
                        />
                </center>
                <hr/>
            </header>
        )
    }
}


export default Header;



/*
const Header = ( ) => {
    return(
        <header>
            <div>Logo</div>
            <input/>
            <hr/>
        </header>
       
    )
}



const styles = {
            logo:{
                color:'green',
                fontSize : '30px'
            },
            header:{
                background:'#D3D3D3'
            }
        }
*/