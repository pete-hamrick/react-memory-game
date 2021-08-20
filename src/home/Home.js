import React, { Component } from 'react';
//TODO
//write a handleClick function
//either create new user or load previous user(password auth?)
//redirect to game when user created or loaded
//put the user into storage if created


class Home extends Component {
    state = { 
        name: '',
    }
    render() { 
        return ( 
            <>
               <form className='user-form'>
                   <h4>Please Enter Your Name</h4>
                   <label>Name: </label>
                   <input 
                   onChange={(e) => {
                       this.setState({ name: e.target.value});
                   }}
                   type='text'
                   ></input>
                   <button onClick=''>Play Game!</button> 
               </form>
            </>
        );
    }
}
 
export default Home;