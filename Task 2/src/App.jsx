import { useState } from 'react'
import './App.css'
import Button from './components/Button'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="Container flex">
      <div className="wrapper flex">
        <div className="totalCount">Total Count: {count}</div>
        <div className="btn-wrapper flex">
          <Button Text = "+" onClick={increase}></Button>
          <Button Text = "Reset" onClick={reset}></Button>
          <Button Text = "-" onClick={decrease}></Button>
        </div>
      </div>
    </div>
  )

  function increase(){
    setCount(count+1);
  }
  function decrease(){
    setCount(count-1);
  }
  function reset(){
    setCount(0);
  }
}



export default App;
