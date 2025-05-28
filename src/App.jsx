import { useState, Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
      {
        name: 'Sumit'
      },
      {
        name: 'Sumit1'
      },
      {
        name: 'Sumit 2'
      },
      {
        name: 'Sumit 4'
      }
    ]}
    
  }

  render() {
    return  <div className='App'>
      {
        this.state.monsters.map((monster) => {
          return <h1>{monster.name}</h1>
        })
      }
    </div>
  }
}
export default App
