import React from 'react'

const Testimonials = () => {
    const testimonials = [
        {
            name : "Sara Khanna",
            desc: "I was amazed by the accuracy of the all  poojas provided by Mangaldoshpoojan. It gave me a new perspective on my life choices."
        },
        {
            name : "Raj Patel",
            desc: "The pooja here are truly enlightening. I received valuable benefit that helped me navigate through a challenging phase in my career."
        },
        {
            name : "Lila Gupta",
            desc: "The compatibility analysis service gave me profound insights into my relationships. It helped me communicate better with my partner and strengthen our bond."
        },
        {
            name : "Vinay kapoor",
            desc: "Mangaldoshpoojan's guidance has been instrumental in bringing clarity and direction to my life decisions."
        },
    ]
  return (
    <div className='grid testimonial-grid'>
      {testimonials.map(({name, desc}, idx) => (<div  key={idx}>
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>))}
    </div>
  )
}

export default Testimonials
