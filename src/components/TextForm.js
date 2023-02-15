import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to UpperCase" , "success");
  }

  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to LowerCase" , "success");
  }

  const handleClearClick = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared Successfully" , "success");
  }
  
  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to Clipboard" , "success");
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed" , "success");
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);  
  }

  const [text , setText] = useState("");
  // setText("New Text");
  return (
    <>
      <div className="container" style = {{color:props.mode === 'dark'?'white':'black'}}>
          <h1 >{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor:props.mode === 'dark'?'#121212':'white' ,color:props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
          </div>

          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
          <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>

      <div className="container my-3" style = {{color:props.mode === 'dark'?'white':'black'}}>
        <h2>Your Text Summery</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something into textbox above to preview it here"}</p>
      </div>
    </> 
  )
}
