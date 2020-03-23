import React from 'react'

import Layout from '../components/layout'
import GenericMessage from '../containers/generic-message'

const SubmittedPage = () => (
  <Layout>
    <GenericMessage title="Submitted">
			<p>Thank for you submitting your contact information. I will be in touch as soon as possible!</p>
			<a href="/">Return to Home</a>
		</GenericMessage>
  </Layout>
)

export default SubmittedPage
