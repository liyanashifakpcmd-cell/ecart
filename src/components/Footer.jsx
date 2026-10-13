import React from 'react'

function Footer() {
  return (
    <footer className="bg-dark text-light mt-5">

      <div className="container py-5">

        <div className="row">
        <div className="col-md-4">
            <h4 className="text-info">
               <i className="fa-solid fa-bag-shopping me-2"></i>
              Shopify</h4>
         <p className="text-light">
              Shop your favourite products at the best prices.
              Quality products, easy shopping and fast delivery.
            </p>
          </div>

          
          <div className="col-md-4">
            <h5>Quick Links</h5>

            <ul className="list-unstyled">
              <li className="mb-2">Home</li>
              <li className="mb-2">Products</li>
              <li className="mb-2">About Us</li>
              <li className="mb-2">Contact</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Contact Us</h5>

            <p>
              <i className="fa-solid fa-envelope me-2"></i>
              shopify@gmail.com
            </p>

            <p>
              <i className="fa-solid fa-phone me-2"></i>
              +91 98765 43210
            </p>

            <div className="mt-3">
              <i className="fa-brands fa-facebook fs-4 me-3"></i>
              <i className="fa-brands fa-instagram fs-4 me-3"></i>
              <i className="fa-brands fa-twitter fs-4 me-3"></i>
              <i className="fa-brands fa-youtube fs-4"></i>
            </div>
          </div>

        </div>

      </div>

     
      <div className="border-top border-secondary text-center py-3">
        <small className="text-secondary">
          © 2026 Shopify. All Rights Reserved.
        </small>
      </div>
      </footer>
  )
}

export default Footer