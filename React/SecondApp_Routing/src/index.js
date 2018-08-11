import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Posts from './components/posts';
import Profile from './components/profile';
import PostDetail from './components/post_detail';
import Lifecycle from './components/lifecycle';

class App extends Component{
    render(){
        return(
            <div>
                <h1>This is  APP Routing</h1>
            </div>
        )
    }
}

ReactDOM.render(
        <BrowserRouter>
            <div>
                <header>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>                        
                        </button>
                        <a className="navbar-brand" href="#">AcadGild</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/posts">Posts</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/lifecycle">Lifecycle</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                        </ul>
                        </div>
                    </div>
                </nav>
                   
                    
                </header>
                <Route exact path="/" component={App}></Route>
                <Route exact path="/posts" component={Posts}></Route>
                <Route path="/posts/:id" component={PostDetail}></Route>
                <Route path="/profile" component={Profile}></Route>
                <Route path="/lifecycle" component={Lifecycle}></Route>
            </div>
        </BrowserRouter>
    , document.getElementById('root'));
