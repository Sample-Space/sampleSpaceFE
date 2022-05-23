import { Link } from 'react-router-dom'
import './Carousel.css'

const Carousel = () => {
  return (
    <div className='slider'>
      <div className='slides'>
        <div id='slide-1'>Hello!</div>
        <div id='slide-2'>Learn shit!</div>
        <div id='slide-3'>Do shit!</div>
        <div id='slide-4'>Now with keyboard!</div>
        <div id='slide-5'>
          <a id='enter' href='/play'>
            Let's Jam
          </a>
        </div>
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
