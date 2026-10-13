
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchproducts } from '../redux/slices/productSlice'
import { Card, Spinner } from 'react-bootstrap'

function Home() {
  const dispatch = useDispatch()

  const { loading, products, error } = useSelector(
    state => state.products
  )

  const [currentPage, setCurrentPage] = useState(1)
  const cardPerPage = 6

  const endingIndex = currentPage * cardPerPage
  const startingIndex = endingIndex - cardPerPage

  const currentProducts = products.slice(startingIndex, endingIndex)

  useEffect(() => {
    dispatch(fetchproducts())
  }, [dispatch])

  // Reset page when search results change
  useEffect(() => {
    setCurrentPage(1)
  }, [products])

  return (
    <>
      <Header insideHome={true} />

      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="warning" />
        </div>
      ) : error ? (
        <p className="text-danger text-center my-5">
          {error}
        </p>
      ) : (
        <>
          <div className="row m-5">
            {currentProducts.length > 0 ? (
              currentProducts.map(pro => (
                <div className="col-lg-4 mt-2" key={pro.id}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img
                      variant="top"
                      src={pro.thumbnail}
                    />

                    <Card.Body className="text-center">
                      <Card.Title className="text-warning">
                        {pro.title.slice(0, 15)}...
                      </Card.Title>

                      <Card.Text>
                        <Link
                          className="btn btn-success w-100 mt-3"
                          to={`/product/${pro.id}/view`}
                        >
                          View More...
                        </Link>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))
            ) : (
              <p className="text-danger fw-bold text-center">
                No Products Found!
              </p>
            )}
          </div>

          {products.length > cardPerPage && (
            <div className="text-center my-5">
              <Pagination
                totalProducts={products.length}
                cardPerPage={cardPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Home
