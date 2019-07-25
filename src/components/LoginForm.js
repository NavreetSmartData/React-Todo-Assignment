import React, {Component} from 'react'
import axios from 'axios'

class LoginForm extends Component {
    constructor(props){
        super(props)
   
        this.state = {
            username: '',
            password:''
   
        };
    }
   
    changeHandler = (event) => {
         this.setState({
             [event.target.name] : event.target.value
         })
    }
     
  
   handleSubmit = (event) => {
       event.preventDefault();
     alert(`${this.state.username} ${this.state.password}`);    
     
    //  axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
    //     .then(response => {
    //         console.log(response);
    //         this.setState(
    //             {posts:response.data}
    //         )
    //     })
    //     .catch(error => {
    //         console.log(error);
    //         this.setState({
    //             errorMsg:"erro"
    //         })
    //     })
   }
    render(){
       return (
           <React.Fragment>
        <h1>Login Form</h1>

       <div class=" text-cent">
       <form onSubmit={this.handleSubmit}>
         <div class="container">
             <label for="username">Username</label>
             <input type="text" name="username" value={this.state.username} onChange={this.changeHandler}/>
         </div>
         <div class="container">
             <label>Password</label>
             <input type="password" name="password" value={this.state.password} onChange={this.changeHandler}/>
         </div>
         <button type="submit"> Submit</button>
       </form>
       </div>
       </React.Fragment>
       )
   }
   }
   export default LoginForm