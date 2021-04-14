import React from 'react'

const year = new Date().getFullYear();

export const Copyright = () => {
  return(
      <>
        Copyright &copy; {year} JabaWERX, Inc.
      </>
    )
}