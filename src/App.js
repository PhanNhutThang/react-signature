import React,{useRef} from "react";
import "./App.css";
import SignaturePad from 'react-signature-canvas';


export default function App() {

  

  let sigpad = useRef({});

  function clear(){
    sigpad.current.clear();
  }
  

  return (
    <>
    <div className={'signature'}>
      <button onClick={clear}>Clear</button>
      <br></br>
      <SignaturePad backgroundColor="red"       
        ref={sigpad}
        penColor = "white"
      />
    </div>
    <p>Phần background-size em chưa làm được ạ</p>
    </>
  );
}


