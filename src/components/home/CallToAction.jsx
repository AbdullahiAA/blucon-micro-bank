import React from 'react'
import "./CallToAction.css"

function CallToAction() {
  return (
    <section className='callToAction'>
        <h2>Lorem Ipsum Dolor Sit Amet, Consectetur </h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim massa amet id neque in ultrices vitae. Accumsan, tincidunt.</p>

        <div className="callToAction__btn">
            <button>Download Our App</button>

            <button className='btnReverse'>Open Free Account</button>
        </div>
    </section>
  )
}

export default CallToAction