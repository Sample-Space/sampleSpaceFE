import './App.css'
import logo from '../../assets/images/sample-space-logo.svg'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
      <header>
        <img src={logo} alt='Sample Space logo' />
        <h2>
          an educational drum machine featuring samples from across the universe
        </h2>
      </header>
      <main className='main-view'>
        <h3 className='main-item'>Learn How to Play:</h3>
        <iframe
          className='main-item'
          width='560'
          height='315'
          src='https://www.youtube.com/embed/dokLwszdUgY'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
        <Link to='/play'>
          <button className='main-item nav-button'>Let's Jam</button>
        </Link>
      </main>
    </div>
  )
}

export default App
