import React from 'react'
import Layout from '../components/Layout/Layout'
import Doenerstag from '../components/Layout/Doenerstag/Doenerstag'

const locale = require('../locales/de-CH.json')

export default function ch() {
  return (
    <Layout switchLabel={locale.switchLabel}>
      <Doenerstag doener={locale.doener} noDoener={locale.noDoener} />
    </Layout>
  )
}
