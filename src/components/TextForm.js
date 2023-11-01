import React, {useState}from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
        
    }

    const handleLoClick = () =>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
        
    }

    const handleClearText = () =>{
        let newText= " ";
        setText(newText);
        props.showAlert("Text Clear!","success");
        
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value); 
        props.showAlert("Copied to clipboard!","success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!","success");
    }

    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }



// const [count, setCount]= useState(0);
const [text, setText] = useState(""); 
// text = "new text" //wrong way to change the state
// setText("new text"); //correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1 >{props.heading}</h1>
<div className="mb-3">
 
  <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>CopyText</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>


</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h2>Your text Summary</h2>
    <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
    <p><b>{0.008 * text.split(" ").length} </b>Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"enter something in the textbox to preview it here"}</p>

</div>
</>
  )
}
