import React from 'react';

export default ({list, _delete,_edit}) => {
    return (<ul>
        {
            list.map((value, index) => 
         
            <li key={index}>{value} <button className="delete-button" onClick={() => _delete(index)}>Delete</button>
             <button className="edit-button" onClick={() => _edit(index,value)}>Edit</button>
            </li>
        
    )}
    </ul>);
};