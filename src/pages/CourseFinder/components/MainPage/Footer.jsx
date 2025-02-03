import React from 'react'
import FootGrid from './FootGrid'
import FootBottom from './FootBottom'
import CustomInput from './CustomInput'
import NewsLetter from './NewsLetter'

const Footer = () => {
  return (
    <>  
         <NewsLetter/>
        <CustomInput />
        <FootGrid />
        <FootBottom />
    </>
  )
}

export default Footer