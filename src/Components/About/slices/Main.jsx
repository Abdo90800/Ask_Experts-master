import React from 'react'
import MainShaired from '../../../ImportantSlicesSharedComponents/main'
export default function Main() {
  const pathImage = 'bg-[url(./imgs/about-main.jpg)]'
  const headLine = 'PROCCESS'
  const paragraph = 'Creative Services For Boost Your Business Growth'
  return (
      <MainShaired
      pathImage = {pathImage}
      headLine = {headLine}
      paragraph = {paragraph}
      />
     
  )
}
