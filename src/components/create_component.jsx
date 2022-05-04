import { useRef } from "react";

export default function CreateComponent(props){
    //
    
    const inputRef = useRef();
function addButton(){
    props.onClick(inputRef.current.value);
    inputRef.current.value='';
}
    return <div>
    <input type={'text'} placeholder={'Enter the text'} ref={inputRef}></input>
    <input type={'button'} value={'Add'} onClick={addButton}></input>
    </div>
}