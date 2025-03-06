import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      text: "Working with this team has transformed our online presence. Their attention to detail and creative approach exceeded our expectations!",
      emoji: "👩‍💼"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Startup Founder",
      text: "As a startup founder, I needed a solution that was both affordable and high-quality. They delivered exactly what I needed and more.",
      emoji: "👨‍💻"
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "E-commerce Manager",
      text: "Our sales have increased by 40% since the launch of our new website. The user experience is seamless and our customers love it!",
      emoji: "👩‍🚀"
    },
    {
      id: 4,
      name: "David Wilson",
      role: "CTO",
      text: "The technical expertise and problem-solving skills of this team are outstanding. They helped us navigate complex challenges with ease.",
      emoji: "👨‍🔧"
    },
    {
      id: 5,
      name: "Emma Rodriguez",
      role: "Small Business Owner",
      text: "They understood my vision from day one and brought it to life beautifully. The process was smooth and communication was excellent!",
      emoji: "👩‍🎨"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-heading">What Our Clients Say</h2>
        
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
            >
              <div className="testimonial-emoji">{testimonial.emoji}</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;