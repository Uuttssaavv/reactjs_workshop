import Button from './Button.jsx';
import {useState} from 'react';

const Counter = () => {
  const[num, setNum] = useState(0);

  const handleClick = (op) => {
    if (!(op === 'num-1' && num<=0))
      setNum(eval(op))
  }

  return (
    <div className="counterbox">
      <Button value='-' onclick={() => {handleClick('num-1')}}/><br/>
      <span>{num}</span><br/>
      <Button value='+' onclick={() => {handleClick('num+1')}}/><br/><br/>
      <Button value="reset" onclick={() => {handleClick('0')}}/>
    </div>
  )
}

export default Counter;

  // const addNum = () => setNum(num+1)
  // const subtractNum = () => {
  //   if (num>0) setNum(num-1)
  //   }
  // const reset = () => setNum(0)
