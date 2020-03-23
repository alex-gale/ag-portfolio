import React from 'react'

import './index.scss'

const Project = ({ image, name, description, link }) => {
	return (
		<div className="project">
			<a href={link} target="_blank" rel="noopener noreferrer">
				<img src={image} alt={name} />
			</a>
			<h2>{name}</h2>
			<p>{description}</p>
		</div>
	)
}

export default Project
