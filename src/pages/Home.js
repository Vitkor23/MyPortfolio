import React from 'react';
import './home.css';
import { FaFacebook, FaPlay } from 'react-icons/fa';
import HeroImg from '../assets/dev.png';
import { FaXTwitter } from 'react-icons/fa6';
import { TiSocialInstagram, TiSocialLinkedin } from 'react-icons/ti';
import { cards } from '../utils/Data';
import Card from '../components/card/Card';
import { v4 as uuid } from 'uuid';

export const Home = () => {
  return (
    <div className='container home'>
      <section className="hero-section" id='home'>
        <div className="hero-section__left">
          <div className="hero-section__special-text">
            Hello I am <br /> Viktor
          </div>
          <div className="hero-section__paragraph">
            <h3> Frontend Developer specialized in HTML, CSS, JavaScript, and React
            </h3>
          </div>
          <a href='/resume.pdf' download="resume.pdf" className='button'> Get Resume
          </a>
          <div className="video-link">
            <div className="link">
              <a href="https://example.com">
                <FaPlay />
              </a>
            </div>
            <span>Video Link</span>
          </div>
        </div>
        <div className="hero-section__right">
          <div className="hero-section__image">
            <img src={HeroImg} alt="hero img" />
            <div className="hero-section-image-half-round-shape">
            </div>
            <div className="social-links">
              <a href=""><FaFacebook /></a>
              <a href=""><FaXTwitter /></a>
              <a href=""><TiSocialLinkedin /></a>
              <a href=""><TiSocialInstagram /></a>
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
    </div>
  );
}
