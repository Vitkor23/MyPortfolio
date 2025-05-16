import React, { useEffect, useRef } from 'react';
import './home.css';
import { FaFacebook, FaPlay } from 'react-icons/fa';
import HeroImg from '../assets/dev.png';
import { FaXTwitter } from 'react-icons/fa6';
import { TiSocialInstagram, TiSocialLinkedin } from 'react-icons/ti';
import { cards } from '../utils/Data';
import Card from '../components/card/Card';
import { v4 as uuid } from 'uuid';
import { register } from 'swiper/element/bundle';


import Portfolio1 from '../assets/project1.png'
import Portfolio3 from '../assets/project3.gif'
import Portfolio2 from '../assets/project2.png'
import { Contact } from '../contex/Contact';





export const Home = () => {
    const skillRef = useRef(null);
    const swiperRef = useRef(null);
 
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateProgressbar();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.5 }
      );
 
      if (skillRef.current) {
        observer.observe(skillRef.current);
      }
 
      return () => {
        observer.disconnect();
      };
    }, []);
 
    useEffect(() => {
      register();
 
      const params = {
        breakpoints: {
          280: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
        },
      };
 
      if (swiperRef.current) {
        Object.assign(swiperRef.current, params);
        swiperRef.current.initialize();
      }
    }, []);
 
    const animateProgressbar = () => {
        const progressBars = document.querySelectorAll('.skill_progress-line');
        progressBars.forEach((progressBar) => {
          const percent = progressBar.getAttribute('data-width');
          progressBar.style.width = `${percent}%`;
        });
      };
      


  return (
    <div className='container home'>
      <section className="hero-section" id='home'>
        <div className="hero-section__left">
          <div className="hero-section__special-text">
            Hello I am <br /> Viktor
          </div>
          <div className="hero-section__paragraph">
          <h3>Frontend Developer specialized in HTML, CSS, JavaScript, React, Java, and Databases</h3>

          </div>
          <a href='/resume.pdf' download="resume.pdf" className='button'> Get Resume
          </a>
          <div className="video-link">
            <div className="link">
              <a href="https://youtu.be/LizumDmoSl0?si=sAfIZUb7Wx7dln45">
                <FaPlay />
              </a>
            </div>
            <span>Video Link</span>
          </div>
          <div className="video-link">
            <div className="link">
              <a href="https://www.youtube.com/shorts/85GcZolYsKI">
                <FaPlay />
              </a>
            </div>
            <span>Video Link</span>
          </div>
        </div>
        <div className="hero-section__right">
          <div className="hero-section__image">
            <img src={HeroImg} alt="hero img" />
            <div className="hero-section-image-half-round-shape"></div>
            <div className="social-links">
  <a href="https://www.facebook.com/share/dfbewc7XARBaLYbE/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
  <a href="https://x.com/ViktorBrus55119?s=09" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
  <a href="https://www.linkedin.com/in/viktor-brusilovsky-9a1471108/" target="_blank" rel="noopener noreferrer"><TiSocialLinkedin /></a>
  <a href="https://www.instagram.com/viktorbrusilov?utm_source=qr&igsh=N2g0ODBmcjJybzZy" target="_blank" rel="noopener noreferrer"><TiSocialInstagram /></a>
</div>

          </div>
        </div>
      </section>
      <section className="services" id='services'>
        <h3 className='section__label'>My Services</h3>
        <h2 className='section__title'>Services Provided to my clients</h2>
        <div className="cards">
          {cards?.map((card) => (
            <Card
              key={uuid()}
              icon={card?.icon}
              title={card?.title}
              features={card?.features}
            />
          ))}
        </div>
      </section>
      <section className="skill" id='skills' ref={skillRef}>
        <div className="skill__left">
           <h3 className="section__lable">My Skills</h3>
           <h2 className="section__title">My Specials Skills are</h2>
           <a href="/resume.pdf" download={'resume.pdf'} className='button'>Get Resume</a> 
        </div>
        <div className="skill__right">
            <div className="skill_wrapper">
                <div className="skill__tag">Java</div>
                <div className="skill_box">
                    <div className="skill_progress-line" data-width='90'></div>
                    <div className="skill_percentage">90%</div>
                </div>
            </div>
            <div className="skill_wrapper">
                <div className="skill__tag">Developer</div>
                <div className="skill_box">
                    <div className="skill_progress-line" data-width='84'></div>
                    <div className="skill_percentage">84%</div>
                </div>
            </div>
            <div className="skill_wrapper">
                <div className="skill__tag">Date base</div>
                <div className="skill_box">
                    <div className="skill_progress-line" data-width='70'></div>
                    <div className="skill_percentage">70%</div>
                </div>
            </div>
            <div className="skill_wrapper">
                <div className="skill__tag">Design </div>
                <div className="skill_box">
                    <div className="skill_progress-line" data-width='60'></div>
                    <div className="skill_percentage">60%</div>
                </div>
            </div>
            
        </div>
      </section>

      <section className="portfolio" id="protfolio">
      <h3 className="section__lable">My Portfolio</h3>
       <h2 className="section__title">My Complite  projects</h2>
     <div className="portfolio__grid">
        <div className="portfolio__card">
         <img src={Portfolio1} alt="Portfolio1" />
         <div className="portfolio__card-ttile"><a href="https://pet-house-fronted.vercel.app/"> Protfolio 1</a></div>
        </div>
        <div className="portfolio__card">
         <img src={Portfolio2} alt="Portfolio2" />
         <div className="portfolio__card-ttile">Protfolio 2</div>
        </div>
        <div className="portfolio__card">
         <img src={Portfolio3} alt="Portfolio3" />
         <div className="portfolio__card-ttile">Protfolio 3</div>
        </div>
        
     </div>
     </section>
      
     {/* <section className='testimonials' id='testimonials'>
				<h3 className='section__label'>Testimonials</h3>
				<h2 className=' section__title'>Satisfied Clients Say</h2>
				<div className='testimonials__wrapper'>
					<swiper-container speed='500' ref={swiperRef} css-mode='true'>
                    <swiper-slide>
    <div className='testimonials__card'>
        <div className='testimonials__text'>
            The service was very good, though there were a few minor issues that could be improved.
        </div>
        <div className='testimonials__author'>Emily</div>
        <div className='testimonials__author-title'>Manager at Tech Solutions</div>
    </div>
</swiper-slide>
<swiper-slide>
    <div className='testimonials__card'>
        <div className='testimonials__text'>
            Overall, I had a positive experience. The team was helpful and the project was delivered on time.
        </div>
        <div className='testimonials__author'>Michael</div>
        <div className='testimonials__author-title'>Director at Innovate Corp</div>
    </div>
</swiper-slide>
<swiper-slide>
    <div className='testimonials__card'>
        <div className='testimonials__text'>
            Good job! There were some areas for improvement, but I am satisfied with the results.
        </div>
        <div className='testimonials__author'>Sophia</div>
        <div className='testimonials__author-title'>CTO at Future Tech</div>
    </div>
</swiper-slide>
<swiper-slide>
    <div className='testimonials__card'>
        <div className='testimonials__text'>
            The project was well executed, though there were a few delays. Overall, I would recommend them.
        </div>
        <div className='testimonials__author'>James</div>
        <div className='testimonials__author-title'>CEO at Smart Innovations</div>
    </div>
</swiper-slide>
<swiper-slide>
    <div className='testimonials__card'>
        <div className='testimonials__text'>
            Good quality work. Some minor hiccups, but nothing that couldn't be fixed quickly.
        </div>
        <div className='testimonials__author'>Olivia</div>
        <div className='testimonials__author-title'>Product Manager at Tech Wave</div>
    </div>
</swiper-slide>

					</swiper-container>
				</div>
	 </section> */}
     <div className='contact' id='contact'>
				<h3 className='section__label'>Contact</h3>
				<h2 className=' section__title'>Connect with me</h2>

				<Contact />
			</div>
        
    </div>
  );
}
