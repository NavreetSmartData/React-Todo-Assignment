import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Navreet</h1>
    //     </div>
    // )

    return React.createElement(
    'div',
    {id: 'Hello',className:"dummyClass"},
    React.createElement('h1',null,'Hello Navreet')
    )
}

export default Hello