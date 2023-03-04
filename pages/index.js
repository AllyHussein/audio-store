import React from 'react'
// import Footer from '../components/Footer'
import FooterBanner from '../components/FooterBanner'
import HeroBanner from '../components/HeroBanner'
import Product from '../components/Product'
import {client} from '../lib/client'
function Home({products , bannerData}) {
  return (
    <>
    <HeroBanner heroBanner={bannerData?.length && bannerData[1]} />
    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Speakers of Many Variations</p>
    </div>
    <div className='products-container'>
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
    {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
    </>
  )
}
export const getServerSideProps = async() => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)
  
  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props : {products , bannerData}
  }
}
export default Home