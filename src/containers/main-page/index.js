import React from 'react'

import './index.scss'
import GithubLogo from '../../images/github-icon.svg'
import PortraitPhoto from '../../images/portrait.jpg'

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
						<img alt="Alex Gale" src={PortraitPhoto} />
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

				<div className="skills-list-container">
					<h1 className="skills-list-title">Proficient</h1>
					<div className="skills-list">
						<div className="skill">JavaScript</div>
						<div className="skill">NodeJS</div>
						<div className="skill">React</div>
						<div className="skill">Express.js</div>
						<div className="skill">HTMl & CSS</div>
						<div className="skill">SCSS</div>
						<div className="skill">MongoDB</div>
						<div className="skill">Linux</div>
						<div className="skill">Git</div>
					</div>

					<h1 className="skills-list-title">Familiar</h1>
					<div className="skills-list">
						<div className="skill">Redis</div>
						<div className="skill">PHP</div>
						<div className="skill">MySQL</div>
						<div className="skill">Java</div>
					</div>
				</div>
			</div>
		</div>
  </div>
)

export default MainPage
