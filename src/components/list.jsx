import React from 'react';
function List(props){

      return(
        <li onClick={()=>{
            props.onChecked(props.id)
        }} >{props.name}</li>
      )
}
export default List;