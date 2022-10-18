import React from 'react'
import Title from '../../common/title/Title'
import './Hero.css'

const Hero = () => {
  return (
    <>
        <section className='hero'>
            <div className="container">
                <div className="row">
                    <Title subtitle='WELCOME TO ACADEMIA' title='Best Online Education'/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum nobis fuga molestiae laborum itaque et vel voluptas necessitatibus qui ratione. Suscipit natus fuga enim dolores officiis numquam earum eaque ipsa.</p>
                    <div className="button">
                        <button className='primary-btn'>
                            GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                        <button>
                            VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <div className="margin"></div>
    </>
  )
}

export default Hero