import React, { Component } from 'react';
import fire from './fire';
import './loginEliment.css';


class Login extends Component{
constructor(props)
{
    super(props)
    this.login=this.login.bind(this);
    this.handleChange= this.handleChange.bind(this);
    this.signup=this.signup.bind(this); 
    this.state={
        email : "",
        password: ""
    }
}
login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
    console.log(err);
    })

}
    signup(e){
        e.preventDefault(); 
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err);
        })
    }
handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
}
    render(){

    return(
    <>
    <h3>Authentication with firebase in React js.</h3><div className='main'>
        <div className='ContainerWrap'>
        <h1>Registration in my app</h1>
        <div className="Container" > 
            <form>
            <label className='lbl'>Email or Username</label>
                <input className='Wrap' type='email' id= 'email'
                name='email' placeholder='Enter email address'
                onChange={this.handleChange}
                value={this.state.email}/>
            <label className='lbl'>Password</label>
                <input className='Wrap' type ='password' 
                name='password' id='password'
                    placeholder='Enter the password'
                    onChange={this.handleChange}
                    value={this.state.password}
                />
                <button className='Btn' onClick={this.login}>Login </button>
                <button className='Btn' onClick={this.signup}>Sign up </button>
                <a href="#">Forget Your Password</a>
            </form></div>
        </div></div></>
    )
}
}
export default Login;