
import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'
import { removeFromWishlist } from '../redux/slices/wishlistSlice'
import { useNavigate } from 'react-router-dom'

function Wishlit() {
  const wishlist = useSelector(state => state.wishlist)
  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCart = (product) => {
    const existingProduct = cart.find(
      pro => pro.id === product.id
    )

    dispatch(addToCart(product))

    if (existingProduct) {
      alert('Product quantity increased!')
    } else {
      alert('Product added to cart!')
    }

    navigate('/cart')
  }

  return (
    <>
      <Header />

      <div className="container mt-4">
        <div className="row">

          {wishlist.length > 0 ? (
            wishlist.map(pro => (
              <div
                className="col-lg-4 col-md-6 mb-4"
                key={pro.id}
              >
                <Card style={{ width: '18rem' }}>

                  <Card.Img
                    variant="top"
                    src={pro?.thumbnail}
                    alt={pro?.title}
                  />

                  <Card.Body className="text-center">

                    <Card.Title>
                      {pro?.title}
                    </Card.Title>

                    <h5 className="text-success">
                      ${pro?.price}
                    </h5>

                    <div className="mt-4 d-flex justify-content-between align-items-center">

                      {/* Remove from Wishlist */}
                      <button
                        className="btn border-0"
                        onClick={() =>
                          dispatch(removeFromWishlist(pro.id))
                        }
                        title="Remove from wishlist"
                      >
                        <i className="fa-solid fa-heart-circle-xmark text-danger fa-2xl"></i>
                      </button>

                      {/* Add to Cart */}
                      <button
                        className="btn border-0"
                        onClick={() => handleCart(pro)}
                        title="Add to cart"
                      >
                        <i className="fa-solid fa-cart-plus text-success fa-2xl"></i>
                      </button>

                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <div className="d-flex align-items-center justify-content-center flex-column my-5">

              <img
                src="https://assets-v2.lottiefiles.com/a/66ad6e50-1181-11ee-bc75-f30f77b4ca03/2RYathb9em.gif"
                width="200px"
                alt="Empty wishlist"
              />

              <h1 className="text-success fw-bold my-3">
                EMPTY WISHLIST
              </h1>

            </div>
          )}

        </div>
      </div>
    </>
  )
}

export default Wishlit
