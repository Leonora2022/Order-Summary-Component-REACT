
import React from 'react'
import Music from './Music'

function Card({plan, button, bottom, title, summary, bg, music}) {
  return (
    <article className='card-wrapper'>
        <div className="img-hero-bg">
    <img src={`../src/assets/${bg}`} alt="happily dancing to music" className='hero-img'/>
    </div>
    <section className='details-section'>
    <h2 className='card-title'>{title}</h2>
    <p className='card-summary'>{summary}</p>
    <Music>
        <span>
        <img src={`../src/assets/${music}`} alt="music icon" className='music-icon'/>
        </span>
        <div className="plan">
            <h3 className='music-title'>Annual Plan</h3>
            <p className='music-bill'>{plan}</p>
            </div>
            <p className='music-link'>Change</p>
    </Music>
    <button className='card-btn'>{button}</button>
    <p className='card-bottom'>{bottom}</p>
    </section>
  </article>
  )
}

export default Card