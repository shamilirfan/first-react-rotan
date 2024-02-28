import './App.css'
import About from './components/About/About'
import ExpDynaData from './components/ExpDynaData/ExpDynaData'
import Home from './components/Home/Home'
//import Practice from './components/Practice/Practice'

function App() {
  return (
    <div>
      <Home />
      <About />
      <ExpDynaData name='shahin' age='20' />
      <ExpDynaData name='rupa' age='40' />
      <ExpDynaData name='topu' age='30' />
      {/* <Practice /> */}
    </div>
  )
}

export default App
