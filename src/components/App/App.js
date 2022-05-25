import './App.css'
import logo from '../../assets/images/sample-space-logo.svg'
import Carousel from '../Carousel/Carousel'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
      <header className="intro-header">
        <Link to='/'>
          <img src={logo} alt='Sample Space logo' />
        </Link>
        <h2 className='subtitle'>
          an educational drum machine featuring samples from across the universe
        </h2>
      </header>
      <main className='main-view'>
        <Carousel />
        <Link to='/play'>
          <button className='main-item nav-button'>Let's Jam</button>
        </Link>
      </main>
    </div>
  )
}

export default App
