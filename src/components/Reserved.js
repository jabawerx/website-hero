import React from 'react'
import { Link } from 'react-router-dom'

export const Reserved = () => {
  return(
    <>
      <Link to="/site-map">Site Map | </Link>
      All Rights Reserved |
      <Link to="/privacy-policy"> Privacy Policy</Link>
    </>
  )
}