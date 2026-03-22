
import './App.css'
import Button from './components/Button'

function App() {
  return (
    <>
      <div className="wrapper flex">
        <div className="container flex">
          <div className="title">TODO List</div>
          <div className="inputwrapper flex">
            <input type="text" name="todoInput" placeholder="Enter your text" className="todoInput"></input>
            <Button text="Add" onClick={onclick} className= {"addBtn"}></Button>
          </div>

          <div className="list-wrapper flex">
            <div className="list flex">
              <div>Leran React </div>
              <Button text="X" onClick={onclick} className= {"deleteBtn"}></Button>
            </div>
            <div className="list flex">
              <div>Leran React </div>
              <Button text="X" onClick={onclick} className= {"deleteBtn"}></Button>
            </div>
            <div className="list flex">
              <div>Leran React </div>
              <Button text="X" onClick={onclick} className= {"deleteBtn"}></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
