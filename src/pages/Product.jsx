
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { addToWishList } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Product() {
  const { id } = useParams()

  const [products, setProducts] = useState({})

  const wishlist = useSelector(state => state.wishlist)
  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()

  // Get selected product from localStorage
  useEffect(() => {
    const storedProducts = localStorage.getItem('allproducts')

    if (storedProducts) {
      const allProducts = JSON.parse(storedProducts)

      const product = allProducts.find(
        pro => pro.id == id
      )

      setProducts(product || {})
    }
  }, [id])

  // Add to Wishlist
  const handleWishlist = () => {
    if (!products?.id) return

    const existingProduct = wishlist.find(
      pro => pro.id === products.id
    )

    if (existingProduct) {
      alert('Product already in your wishlist!')
    } else {
      dispatch(addToWishList(products))
      alert('Product added to wishlist!')
    }
  }

  // Add to Cart
  const handleCart = () => {
    if (!products?.id) return

    const existingProduct = cart.find(
      pro => pro.id === products.id
    )

    dispatch(addToCart(products))

    if (existingProduct) {
      alert('Product quantity increased!')
    } else {
      alert('Product added to cart!')
    }
  }

  return (
    <>
      <Header />

      <div className="container">
        <Row className="my-3 align-items-center">

          {/* Product Image */}
          <Col lg={6} className="text-center">
            <img
              src={products?.thumbnail}
              alt={products?.title || 'Product'}
              className="img-fluid"
            />
          </Col>

          {/* Product Details */}
          <Col lg={6} className="text-center p-5">

            <h3 className="text-warning">
              {products?.title}
            </h3>

            <h3 className="text-success">
              ${products?.price}
            </h3>

            <p>{products?.description}</p>

            {/* Buttons */}
            <div className="mt-5 d-flex justify-content-center align-items-center">

              <button
                className="btn btn-light me-3"
                onClick={handleWishlist}
                disabled={!products?.id}
              >
                <i
                  className="fa-solid fa-heart-circle-plus"
                  style={{ color: 'rgb(221, 34, 9)' }}
                ></i>
                {' '}Wishlist
              </button>

              <button
                className="btn btn-light"
                onClick={handleCart}
                disabled={!products?.id}
              >
                <i
                  className="fa-solid fa-cart-plus"
                  style={{ color: 'rgb(44, 107, 69)' }}
                ></i>
                {' '}Cart
              </button>

            </div>
          </Col>

        </Row>
      </div>
    </>
  )
}

export default Product
