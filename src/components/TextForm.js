import React, {useState} from 'react'

export default function TextForm(props) {
  console.log("props", props);
  // below line means that text is variable whose default value='Enter Text Here and setText will be function 
  const [text, setText]= useState('');
  //we can't update the value of a variable(state) directly like we do we in JS , for upadting the value of any variable(state)
  // an update function would be required, in this case setText will be that function 
  const handleUpClick=()=>{
   // console.log("Convert to upper case button clicked");
    let newText= text.toUpperCase();
    setText(newText);
    props.func("Converted to upper case", "success");
  }
  const handleLoClick=()=>{
   // console.log("Convert to upper case button clicked");
    let newText= text.toLowerCase();
    setText(newText);
    props.func("Converted to lower case", "success");
  }
  const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value);
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const clearText=()=>{
    setText('');
    props.func("Text Cleared", "success");
  }
  const removeSpaces=()=>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "));
    props.func("Extra Spaces Removed", "success");
  }
  

  //kabhi bhi agar aap kisi event me listen kr rhe ho jaise ki textArea me handleOnChange hai, tab kya hoga, handleOnChange
  // toh call hoga hi hoga pr iske saath hi hume ek event object bhi milega(yes object sare eventListener me milega)

  //my-3, my-2 react ki class hoti hain jinse ki thodi margin mil jati hai
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" onChange={handleOnChange} value={text} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}id="myBox" rows="8"></textarea>
              <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert to Upper Case</button>
              <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>Convert to Lower Case</button>
              <button disabled={text.length===0} className= "btn btn-primary my-3 mx-1" type="submit" onClick={speak}>Text Pronounciation</button>
              <button disabled={text.length===0} className= "btn btn-primary my-3 mx-1" type="submit" onClick={clearText}>Clear</button>
              <button disabled={text.length===0} className= "btn btn-primary my-3 mx-1" type="submit" onClick={removeSpaces}>Remove Extra Spaces</button>
          </div>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}> 
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element?.length!==0}).length} words and {text.length} characters</p>
      <p>{text.split(/\s+/).filter((element)=>{return element?.length!==0}).length * 0.008} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text:"Nothing to Preview"}</p>
    </div>
    </>

  )
}
