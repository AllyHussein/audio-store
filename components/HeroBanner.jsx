import React from 'react'
import Link from 'next/link'
import {urlFor} from '../lib/client'
function HeroBanner({heroBanner}) {
  return (
    <div className='hero-banner-container'>
        <img src={urlFor(heroBanner.image)} alt='headphones' className='hero-banner-image' />
        
    </div>
  )
}

export default HeroBanner