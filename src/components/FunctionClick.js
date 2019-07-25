import React from 'react'

function FunctionClick(){
    function clickHandler(){
        console.log('sdf');
    }
    return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
    )
}

// const Greet = (props)=> {
// console.log(props);
//    return (
//    <div>
//        <h1>Hello {props.name} {props.heroname}</h1>
//        {props.children}
//    </div>
//    )
// }


export default FunctionClick