import React from 'react'

import Layout from '../components/layout'
import GenericMessage from '../containers/generic-message'

const NotFoundPage = () => (
  <Layout>
    <GenericMessage title="404 Not Found">
			<p>This page was not found</p>
			<a href="/">Return to Home</a>
		</GenericMessage>
  </Layout>
)

export default NotFoundPage
