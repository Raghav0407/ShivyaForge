import React from 'react'
import Banner from '../Components/Banner'
import ProductsShow from '../Components/ProductsShow';
import Parts from '../Components/Parts';

const ProductPage = () => {
  return (
  <>
  <Banner title={"Prdouct Show"} data={"Having strong knowledge and experience in Commercial and Technical Areas, we are able to Manufacture and Export Various  Types of Quality Forging Products as per Customer s Drawings and Specifications at Best Competitive Prices"}/>
  <ProductsShow/>
  <Parts/>
  </>
  )
}

export default ProductPage