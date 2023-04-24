import React, { useState } from 'react'
import GridLayout from '../components/GridLayout'
import NavigationBar from "../components/Home/navbar";
import HomeBanner from "../components/Home/banner";
import Wrapper from "../components/Home/wrapper";
import HomeProduct from "../components/Home/productcard";
import Footer from "../components/Home/footer";

const Home = () => {
  return (
    <div>
      < HomeBanner/>
      <Wrapper />
      <hr />
      <GridLayout/>
      <Footer />
    </div>
  )
}

export default Home