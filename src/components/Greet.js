import React from 'react'

// function Greet(){
//     return <h1>Hello Navreet</h1>
// }

// const Greet = (props)=> {
// console.log(props);
//    return (
//    <div>
//        <h1>Hello {props.name} {props.heroname}</h1>
//        {props.children}
//    </div>
//    )
// }

const Greet = ({name ,heroname})=> {
       return (
       <div>
           <h1>Hello {name} {heroname}</h1>
       </div>
       )
    }

export default Greet