import React ,{useState} from 'react'

export default function Form(props) {
   
    const [text,setText] = useState('');
    

    const handlerOnChange = (event) => {
        // console.log('onChange');
        setText(event.target.value);
    }


    const handlerToUpperCase = ()=> {
        // console.log("button was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase !","success");
    }


    const handlerToLowerCase = () =>{
        // console.log("click to lowercase");
        let n = text.toLowerCase();
        setText(n);
        props.showAlert("Converted to Lowercase !","success");
    }





    const handlerClearText = () =>{
      setText("");
      props.showAlert("Text is cleared !","success");
    }

    const handlerCopyText = () =>{
      let newText = text;
      const textCopy = newText;
      navigator.clipboard.writeText(textCopy);
      props.showAlert("Text copied !","success");
    }

   


    
  return (
    <>
    <div className="container my-2" style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode}}>
      

      <h1>{props.title}</h1>
      <div className="my-1" >
      <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
      <textarea className="form-control" style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='light'?'white':'#343a40'}} value={text} onChange={handlerOnChange} id="exampleFormControlTextarea1" rows="8"></textarea><br/>

      <button className="btn btn-primary mx-1" onClick={handlerToUpperCase}>{props.button}</button>

      <button className="btn btn-primary" onClick={handlerToLowerCase} >Click to lowercase</button>

      <button className="btn btn-primary mx-1" onClick={handlerClearText} >Clear Text</button>

      <button className="btn btn-primary mx-1" onClick={handlerCopyText} >Copy Text</button>

      </div>

    </div>


    <div className="container my-2" style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode}}>
    
      <h2>Your text summary</h2>
      <p>{text===""?0:text.split(" ").length-1} words and {text.length} characters</p>
      <p>{text===""?0:text.split(" ").length * 0.008} Minutes read</p>
      <h2>Preview</h2>
      {text}

    </div>


   </>
  )

}
