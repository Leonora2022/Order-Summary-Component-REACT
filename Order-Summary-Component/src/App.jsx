
import React, { useState } from 'react'
import Card from '../Component/Card'

function App() {
  const [details, setDetails] = useState({
    plan:"$59.99/year",
    button: "Proceed to Payment",
    bottom:"Cancel Order",
    title:"Order Summary",
    summary:"You can now listen to millions of songs, audiobooks and podcasts on any device anywhere you like!",
    images: ["illustration-hero.svg", "icon-music.svg"],
  });

  return (
    <div className="container">
       <picture>
     <source
       type="image/jpeg"
       srcSet="./src/assets/pattern-background-desktop.svg 768w"
       sizes="(max-width: 768px) 768px"
     />
     <img src="./src/assets/pattern-background-mobile.svg" />
   </picture>
  <Card 
  plan={details.plan} 
  button={details.button} 
  bottom={details.bottom} 
  title={details.title} 
  summary={details.summary}
   bg={details.images[0]}
  music={details.images[1]}/>
  </div>
  )
}

export default App