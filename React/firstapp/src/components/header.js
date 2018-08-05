import React ,{ Component } from 'react';

class Header extends Component{

    constructor(props){
        super()

        this.state = {
            title:'ACADGILD',
            keyword:''
        }
    }

    inputChanges(event){
        console.log(event.target.value)
        this.setState({keyword:event.target.value})
        this.props.newsSearch(event.target.value)
    }
    render(){
        return(
            //<header style={styles.header}>
            <header>
                <div className="logo" 
                    onClick={()=>{console.log("hiii")}}>
                    {this.state.title}
                </div>
                <center>
                    <input type="text" placeholder="enter serach text..." 
                    onChange={this.inputChanges.bind(this)}/>
                    <br/>
                    {this.state.keyword}
                </center>
                <hr/>
            </header>
        )
    }
}

export default Header;


 /*const styles = {
            header:{
                background:'seagreen'
            },
            logo:{
                color:'skyblue',
                textAlign:'center',
                fontSize:'25px'
            }

        }*/
/*
const Header = () => {
    return(
        <div>
            <h1>This header page</h1>
            <hr/>
        </div>
    ) 
}

state
props
*/
