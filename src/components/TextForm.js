import React, {useState}  from 'react'



export default function TextForm(props) {
   let handleUpClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
    }
   let handleOnChange=(event)=>{
setText(event.target.value)
    }
    let handleLoClick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    let handleClear=()=>{
        let newtext="";
        setText(newtext);
    }
    const [text, setText] = useState("");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',
color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"/>
</div>
<button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button type="button" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button type="button" className="btn btn-danger mx-1" onClick={handleClear}>Clear Text</button>
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
    <p>{text.split(' ').length} words and {text.length} characters</p>
    <p>Takes {0.008*text.split(' ').length} minutes to read</p>
    <h3>Preview</h3>
    <p>{text.substring(0,100)}</p>
    </div>
    </>
  )
}
