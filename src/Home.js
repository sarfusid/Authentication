import React, { Component } from 'react';
import fire from './fire';

class Home extends Component{
constructor(props)
{
    super(props)
    this.state={
        email : "",
        password: ""
    }
}
logout(){
    fire.auth().signOut();
}
    render()
    {

    return(
        <div>
        <h1>You are logged in</h1>
        <button onClick={this.logout}>Logout</button>
           </div>
    )
}
}
export default Home;