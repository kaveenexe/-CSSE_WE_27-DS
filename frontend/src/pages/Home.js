import React, { useState } from 'react'
import GridLayout from '../components/GridLayout'
import HomeBanner from "../components/Home/banner";
import Wrapper from "../components/Home/wrapper";
import Footer from "../components/Home/footer";
import ProductCard from "../components/homeproduct";
const Home = () => {
  return (
    <div>
      < HomeBanner/>
      <Wrapper />
      <hr />
      {/* <GridLayout/> */}
      <ProductCard />
      <Footer />
    </div>
  )
}

export default Home