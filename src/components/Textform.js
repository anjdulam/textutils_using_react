import React, { useState } from 'react';

export default function Textform(props) {
    // useState
    const [text, setText] = useState("default value");

    // functions
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleClickUpper = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.displayAlert("converted to upper case","success");
    };

    const handleClickLower = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.displayAlert("converted to lower case","success");
    };

    const handleClickClear = () => {
        let newtext = '';
        setText(newtext);
        props.displayAlert("text cleared","success");
    };

    const handleCopy=() => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.displayAlert("copied to clipboard","success");
    };
    
    const handleExtraspaces=() => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.displayAlert("extra spaces removed","success");
    };


    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8"
                    value={text}   //def value 
                    onChange={handleOnChange}
                    >
                </textarea>
            </div>
            <button className="btn btn-primary" onClick={handleClickUpper}>
                Convert into upper case
            </button>
            <button className="btn btn-primary mx-4 my-1" onClick={handleClickLower}>
                Convert into lower case
            </button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleClickClear}>
                Clear text
            </button>

            <button className="btn btn-primary mx-4 my-1" onClick={handleCopy}>
                Copy text
            </button>

            <button className="btn btn-primary mx-2 my-1" onClick={handleExtraspaces}>
               Remove Extra spaces
            </button>
        </div>



        <div>
            <div className='container my-5'>
                <h1>preview of entered text</h1>
                <p>{text}</p>

                <h1>your text summary</h1>
                {/* <p> 100 words and 534646 characters</p> */}
                {/* basically its considering space also as word so we use filter(). it takes ele as parameter. if ele len =0, indicating blank then it wont be a part of array  */}
                <p>{text.split(/\s+/).filter((ele)=>{return ele.length !==0}).length} words and {text.length} characters</p>

                <p>minutes taken to read this text = {text.split(" ").length*0.008}</p>
            </div>

        </div>

        </>
    );
}
