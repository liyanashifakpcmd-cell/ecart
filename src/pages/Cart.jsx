
import React from 'react'
import Header from '../components/Header'
import { useSelector, useDispatch } from 'react-redux'
import {
  removeFromCart,
  emptyCart,
  incrementQuantity,
  decrementQuantity
} from '../redux/slices/cartSlice'

function Cart() {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const totalPrice = cart.reduce(
    (total, pro) => total + pro.totalPrice,
    0
  )

  const totalItems = cart.reduce(
    (total, pro) => total + pro.quantity,
    0
  )

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!')
      return
    }

    alert('Order placed successfully! Thank you for shopping with us.')
    dispatch(emptyCart())
  }

  return (
    <>
      <Header />

      {cart.length > 0 ? (
        <div className="container">
          <div className="row">

            <div className="col-lg-8 mt-5">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>title</th>
                      <th>image</th>
                      <th>quantity</th>
                      <th>price</th>
                      <th>action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cart.map(pro => (
                      <tr key={pro.id}>
                        <td>{pro.id}</td>
                        <td>{pro.title}</td>

                        <td>
                          <img
                            width="70px"
                            src={pro.thumbnail}
                            alt={pro.title}
                          />
                        </td>

                        <td>
                          <button
                            className="btn btn-light border"
                            onClick={() =>
                              dispatch(decrementQuantity(pro.id))
                            }
                          >
                            -
                          </button>

                          <span className="mx-2">
                            {pro.quantity}
                          </span>

                          <button
                            className="btn btn-light border"
                            onClick={() =>
                              dispatch(incrementQuantity(pro.id))
                            }
                          >
                            +
                          </button>
                        </td>

                        <td>
                          ${Number(pro.totalPrice).toFixed(2)}
                        </td>

                        <td>
                          <button
                            className="btn text-danger"
                            onClick={() =>
                              dispatch(removeFromCart(pro.id))
                            }
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <button
                className="btn btn-success"
                onClick={() => dispatch(emptyCart())}
              >
                Empty Cart
              </button>

              <button
                className="btn btn-success ms-2"
                onClick={() => window.location.href = '/'}
              >
                Shop More
              </button>
            </div>

            <div className="col-lg-4 mt-5">
              <h3>Total items: {totalItems}</h3>

              <h3>
                Total price: ${totalPrice.toFixed(2)}
              </h3>

              <button
                className="btn btn-success mt-3"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>

          </div>
        </div>
      ) : (
        <div className="text-center mt-5">
          <img
            src="https://media.istockphoto.com/id/1938070533/vector/shopping-cart.jpg?s=612x612&w=0&k=20&c=JW2aKUbyeYN6Hc0ba-6jI19dQNmoVpnvAmliwqMuKRU="
            alt="Empty cart"
            width="200px"
          />

          <h1>Empty Cart</h1>
        </div>
      )}
    </>
  )
}

export default Cart
