import React from 'react'
import ClientCard from '../ClientCard'
import ImageComparisonSlider from '../ImageComparisonSlider'
import "../../assets/css/ThirdSection.css";

const ThirdSection = () => {
  return (
    <section className='third-section'>
      <div className='container'>
        <div className='left-side'>
          <div className='left-side-content'>
            <ImageComparisonSlider />
          </div>
        </div>
        <div className='right-side'>
          <div className='right-side-content'>
            <h1>Conteudo</h1>
          </div>
        </div>
      </div>

    </section>
  )
}

export default ThirdSection
