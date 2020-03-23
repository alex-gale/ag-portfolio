import React from 'react'

import './index.scss'

const GenericMessage = ({ title, children }) => (
	<div className="generic-message">
		<div className="message-container">
			<h1>{title}</h1>
			{children}
		</div>
	</div>
)

export default GenericMessage
