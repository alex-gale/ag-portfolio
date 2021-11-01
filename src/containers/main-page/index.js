import React from 'react'

import './index.scss'
import GithubLogo from '../../assets/images/github-icon.svg'
import { projectList } from '../../assets/project-list'
import Project from '../../components/project'

const MainPage = () => {
  return (
    <div className='main-page'>
      <div className='header'>
        <div className='main-title' data-aos='fade-up' data-aos-duration='1000'>
          <div className='title'>
            <h1>Alex Gale</h1>
          </div>
          <div className='subtitle'>
            <p>Full Stack Web Developer</p>
          </div>
        </div>

        <div className='action-container'>
          <a href='https://f.galex.cc/Alex_Gale_Resume.pdf' target='_blank' rel='noopener noreferrer' className='button resume-link'>
            Check out my Resume
          </a>

          <a href='https://github.com/alex-gale' target='_blank' rel='noopener noreferrer' className='button github-link'>
            <img alt='GitHub' src={GithubLogo} />
            Visit my GitHub
          </a>
        </div>
      </div>

      <div className='projects-container'>
        <div className='box-title'>
          <p>My Work</p>
        </div>

        <div className='projects-list'>
          {projectList.map(project =>
            <Project key={project.name} image={project.image} name={project.name} description={project.description} link={project.link} />
          )}
        </div>
      </div>

      <div className='footer' id='contact'>
        <div className='contact-container'>
          <h2>Get in Touch</h2>

          <form className='contact-form' action='/submitted' name='Contact' data-netlify='true'>
            <input type='hidden' name='form-name' value='Contact' />
            <input required placeholder='Your Name' type='text' name='Name' />
            <input required placeholder='Your Email' type='email' name='Email' />
            <textarea required placeholder='Your Message' type='text' name='Message' />
            <button submit>Send</button>
          </form>
        </div>

        <p className='love-note'>Made with <span role='img' aria-label='love'>❤️</span> using <a target='_blank' rel='noopener noreferrer' href='https://www.gatsbyjs.org/'>Gatsby</a></p>
      </div>
    </div>
  )
}

export default MainPage
