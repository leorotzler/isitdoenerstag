import React from 'react'

import './Doenerstag.scss'

export default function Doenerstag({doener, noDoener}) {
  const isItDoenerstag = () => {
    const date = new Date()
    const day = date.getDay()

    if (day === 4) {
      return doener
    }

    return noDoener
  }

  return (
    <div className="doenerstag__container">
        <h1 className="doenerstag__title">{isItDoenerstag()}</h1>
    </div>
  )
}
