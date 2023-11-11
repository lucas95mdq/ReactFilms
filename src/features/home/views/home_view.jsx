import React from 'react'
import Header from '../../Components/header/Header';
import Footer from '../../Components/footer/Footer';
import Sercher from '../../Components/sercher/Sercher';
import List from '../../Components/list/List';

const HomeView = () => {
  return (
    <div>
        <Sercher/>
        <List/>
        <Footer/>

    </div>

  )
}

export default HomeView;