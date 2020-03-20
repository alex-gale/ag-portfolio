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

			<a href="https://github.com/alex-gale" className="github-link">
				<img src={GithubLogo} />
				Visit my GitHub
			</a>
    </div>
  </div>
)

export default MainPage
