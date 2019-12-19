import React from 'react'
import { Helmet } from 'react-helmet'


import '../../styles/main.scss'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'

export default function Layout(props) {
    console.log(props);
    
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Is it Dönerstag?</title>
        <meta name="description" content="Check if it's Dönerstag today." />
        <link rel="canonical" href="https://isitdoenerstag.com/" />
      </Helmet>
      {props.children}
      <ThemeSwitcher switchLabel={props.switchLabel} />
      <div className="footer">
          <a href="https://github.com/everek/isitdoenerstag" target="_blank">Fork me</a>
      </div>
    </>
  )
}
