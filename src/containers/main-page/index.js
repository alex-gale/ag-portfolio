import React from 'react'

import './index.scss'
import GithubLogo from '../../images/github-icon.svg'

const MainPage = () => (
  <div className="main-page">
    <div className="header">
      <div className="main-title" data-aos="fade-up" data-aos-duration="1000">
        <div className="title">
          <h1>Alex Gale</h1>
        </div>
        <div className="subtitle">
          <p>Full Stack Web Developer</p>
        </div>
      </div>

			<a href="https://github.com/alex-gale" target="_blank" rel="noopener noreferrer" className="github-link">
				<img alt="GitHub" src={GithubLogo} />
				Visit my GitHub
			</a>
    </div>

		<div className="content">
			<div className="about-container">
				<div className="title">
					<p>About Me</p>
				</div>

				<div className="about-content">
					<div className="about-text">
						<p>I'm a Full Stack web developer from Cardiff. My passion is writing clean code to power clean sites.</p>
						<a href="mailto:alex01gale@gmail.com">Let's work together.</a>
					</div>
					<div className="image-holder">
						<img alt="Alex Gale" src="https://www.colonialkc.org/wp-content/uploads/2014/07/Cory-Headshot-Outside-Square.jpg" />
					</div>
				</div>
			</div>

			<div className="tagline-container">
				<p>clean code</p>
				<p>clean sites</p>
			</div>

			<div className="skills-container">
				<div className="title">
					<p>What I Do</p>
				</div>
			</div>
		</div>
  </div>
)

export default MainPage
