import React from 'react';


export default function Alert(props) {

    const capitilize = () => {
        let word = props.alert.type;
        let b = word.toLowerCase();
        return b.charAt(0).toUpperCase() + b.slice(1); 
    }

    
    return (
    props.alert && <div>
      <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong>{capitilize()}: </strong>{props.alert.msg}
      </div>
    </div>
  )
}
