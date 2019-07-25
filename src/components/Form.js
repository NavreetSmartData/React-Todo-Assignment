import React, {Component} from 'react'
import axios from 'axios'

class Form extends Component {
 constructor(props){
     super(props)

     this.state = {
         username: ''

     };
 }

 handleUsernameChange = event => {
      this.setState({
          username:event.target.value
      })
      event.preventDefault();
      console.log(this.state);
 }
 handlesubmit = event => {
    this.setState({
        username:event.target.value
    })
    console.log(this.state);
}
 render(){
    return (
    <form>
      <div>
          <label>Username</label>
          <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
      </div>
    </form>
    )
}
}
export default Form
