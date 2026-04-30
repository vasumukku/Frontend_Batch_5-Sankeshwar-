import React from 'react'
import Body from "./components/Body"
import Navbar from './components/Navbar'
import "./App.css"
const App = () => {
  return (
    <div>
      <div className='cards'>
        <Body  img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaGZZh_vkBocGSLUDExvKyspUrmuryzz92g&s" name="dobberman" price="₹29,999"/>
      <Body  img="https://images.aeonmedia.co/images/acd6897d-9849-4188-92c6-79dabcbcd518/essay-final-gettyimages-685469924.jpg?width=3840&quality=75&format=auto"  name="husky" price="19.99"/>
       <Body  img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaGZZh_vkBocGSLUDExvKyspUrmuryzz92g&s"/>
      <Body  img="https://images.aeonmedia.co/images/acd6897d-9849-4188-92c6-79dabcbcd518/essay-final-gettyimages-685469924.jpg?width=3840&quality=75&format=auto"/>

       <Body  img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaGZZh_vkBocGSLUDExvKyspUrmuryzz92g&s"/>
      <Body  img="https://images.aeonmedia.co/images/acd6897d-9849-4188-92c6-79dabcbcd518/essay-final-gettyimages-685469924.jpg?width=3840&quality=75&format=auto"/>
       <Body  img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaGZZh_vkBocGSLUDExvKyspUrmuryzz92g&s"/>
      <Body  img="https://images.aeonmedia.co/images/acd6897d-9849-4188-92c6-79dabcbcd518/essay-final-gettyimages-685469924.jpg?width=3840&quality=75&format=auto"/>
      </div>

      <Navbar />
    </div>
  )
}

export default App
