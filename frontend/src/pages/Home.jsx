import React from 'react'

// import { Collection } from "../pages/Collection";
// import {Navbar} from '../components/Navbar'
import {Hero} from '../components/Hero'
import { LatestCollection } from "../components/LatestCollection";
// import {Title} from '../components/Title'
// import {ProductItem} from '../components/ProductItem'
import { BestSeller } from "../components/BestSeller";
import { OurPolicy } from "../components/OurPolicy"
import { NewsletterBox } from './../components/NewsletterBox';



export const Home = () => {
  return (
    <div>
   
    <Hero/>
    <LatestCollection/>
    <BestSeller/>
    <OurPolicy/>
    <NewsletterBox/>

    {/* <Title/>
    <ProductItem/>
   
    

    <Collection/> */}
    </div>
  )
}
