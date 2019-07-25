
import React, {Component} from 'react'

class ClassClick extends Component {

    render(){
        return (
        <div>
        <button onClick={() =>this.incrementFive()}>Click Me</button>
        </div>
        )
    }
}

export default ClassClick