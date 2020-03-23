import React from 'react'

import './index.scss'
import GithubLogo from '../../assets/images/github-icon.svg'
import PortraitPhoto from '../../assets/images/portrait.jpg'
import { projectList } from '../../assets/project-list'
import Project from '../../components/project'

const MainPage = () => {
	return (
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

				<div className="action-container">
					<a href="https://f.galex.cc/Alex_Gale_Resume.pdf" target="_blank" rel="noopener noreferrer" className="button resume-link">
						Check out my Resume
					</a>

					<a href="https://github.com/alex-gale" target="_blank" rel="noopener noreferrer" className="button github-link">
						<img alt="GitHub" src={GithubLogo} />
						Visit my GitHub
					</a>
				</div>
	    </div>

			<div className="top-content">
				<div className="about-container">
					<div className="box-title">
						<p>About Me</p>
					</div>

					<div className="about-content">
						<div className="about-text">
							<p>I'm a Full Stack web developer from Cardiff. My passion is writing clean code to power clean sites.</p>
							<a href="mailto:alex01gale@gmail.com">Let's work together.</a>
						</div>
						<div className="image-holder">
							<img src={PortraitPhoto} alt="Alex Gale" />
						</div>
					</div>
				</div>

				<div className="tagline-container">
					<p>clean code</p>
					<p>clean sites</p>
				</div>

				<div className="skills-container">
					<div className="box-title">
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

			<div className="projects-container">
				<div className="box-title">
					<p>My Work</p>
				</div>

				<div className="projects-list">
					{projectList.map(project =>
						<Project key={project.name} image={project.image} name={project.name} description={project.description} link={project.link} />
					)}
				</div>
			</div>
	  </div>
	)
}

export default MainPage
