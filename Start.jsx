import { useRef } from "react";

export default function Start({setUsername}) {
  const inputRef = useRef();

  const handleClick = ()=> {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
  <div className="start">
      <h1 className="title">Take a trip to the moon!</h1>
      <input 
      placeholder="Enter your nickname..." 
      className="startInput"
      ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}><b>Start</b></button>

  </div>
  );
}
