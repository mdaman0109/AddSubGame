import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(5)

 
const increaseCounter = ()=>
{
  if(count<25)
  {
setCount(count+1)
console.log("Clicked",count);
  }

  else{
    let x = document.createElement("div");
            let t =
                document.createTextNode("Game Over!!!!! Greater than 25 not possible");
            x.appendChild(t);
            document.body.appendChild(x);

  }
}

const decreaseCounter =() =>
{
  if(count>0)
  {
setCount(count-1)
console.log("Clicked",count);
  }

  else{
    let x = document.createElement("div");
            let t =
                document.createTextNode("Game Over!!!!! Negative Not possible");
            x.appendChild(t);
            document.body.appendChild(x);
  }

}

  return (
    <>
      <h1>{count}</h1>
      <button id
      onClick={increaseCounter}>Increase Counter</button><br/><br/>
      <button
      onClick={decreaseCounter}>Descrease counter</button>
    </>
  )
}

export default App
