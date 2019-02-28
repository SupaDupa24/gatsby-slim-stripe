import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ProductsContext } from './ProductsProvider'

const ProductPage = ({ productId }) => {
  const { getProduct } = useContext(ProductsContext)
  const product = getProduct(productId)
  return (
    <div>
      <p>{product.name}</p>
    </div>
  )
}

ProductPage.propTypes = {
  productId: PropTypes.string.isRequired
}

export default ProductPage
