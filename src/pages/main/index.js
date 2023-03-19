

import React from 'react'
import HeaderContainer from '../../components/header/HeaderContainer'
import HomeContainer from '../../components/home/HomeContainer'
import './main.scss';
const MainLayout = () => {
  return (
    <div className='main__section'>

        <HeaderContainer />
        <HomeContainer />
      
    </div>
  )
}

export default MainLayout
