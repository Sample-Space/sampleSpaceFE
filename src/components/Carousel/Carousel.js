import { Link } from 'react-router-dom'
import './Carousel.css'

const Carousel = () => {
  return (
    <div className='slider'>
      <div className='slides'>
        <div id='slide-1'>
          Welcome to Sample Space, Where the space between learning and grooving is
          microscopic!
        </div>
        <div id='slide-2'>
          Learn about the crazy sounds of our solar system: the weird, the spooky, and the
          downright alien music of the spheres
        </div>
        <div id='slide-3'>
          Play the drumkit with your mouse or keyboard using QWER/ASDF
        </div>
        <div id='slide-4'>
          Each sound has info on it's astral origin, learn even more by clicking the handy
          link!
        </div>
        <div id='slide-5'>Click 'Let's Jam' to get started!</div>
      </div>
      <a href='#slide-1'>1</a>
      <a href='#slide-2'>2</a>
      <a href='#slide-3'>3</a>
      <a href='#slide-4'>4</a>
      <a href='#slide-5'>5</a>
    </div>
  )
}

export default Carousel
