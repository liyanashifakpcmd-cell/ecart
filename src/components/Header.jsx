import React from 'react'
// import { useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom';
// // import { searchProducts } from '../redux/slices/productSlice'
// function Header({ insideHome }) {
//   const dispatch = useDispatch();

//   return (
//     <nav class="navbar navbar-expand-lg bg-success">
//       <div class="container-fluid">
//         <Link
//           to={"/"}
//           className="text-dark fw-bold text-decoration-none fs-3"
//         >
//           <img src="https://static.vecteezy.com/..." />
//           SHOPIFY
//         </Link>

//         <button
//           class="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>

//         <div
//           class="collapse navbar-collapse"
//           id="navbarSupportedContent"
//         >
//           <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-50">
//             {
//               insideHome &&
//               <input
//                 onChange={(e) =>
//                   dispatch(searchProducts(e.target.value))
//                 }
//                 type="text"
//                 className="form-control"
//               />
//             }
//           </ul>

//           <div className="ms-auto">
//             <Link to={'/wishlist'}>
//               <i class="fa-solid fa-heart text-danger fa-2x"></i>
//               <span class="badge fs-5">0</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header


import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../redux/slices/productSlice";

function Header({ insideHome }) {
  const wishlist=useSelector(state=>state.wishlist)
  const cart=useSelector(state=>state.cart)
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg bg-success">
      <div className="container-fluid px-4">

        {/* Logo */}
        <Link
          to="/"
          className="navbar-brand text-dark fw-bold fs-3"
        >
          <i className="fa-solid fa-cart-shopping me-3"></i>
          SHOPIFY
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >

          {/* Search Bar */}
          <div className="mx-auto w-50">
            {insideHome && (
              <input
                onChange={(e) =>
                  dispatch(searchProducts(e.target.value))
                }
                type="text"
                className="form-control"
                placeholder="Search products..."
              />
            )}
          </div>

          {/* Wishlist and Cart */}
          <div className="d-flex align-items-center gap-3">

            <Link
              to={'/wishlist'}
              className="text-decoration-none text-dark"
            >
              <i className="fa-solid fa-heart text-danger fa-2x"></i>
              <span className="badge fs-5">{wishlist?.length}</span>
            </Link>

            <Link
              to="/cart"
              className="text-decoration-none text-dark"
            >
              <i className="fa-solid fa-cart-shopping fa-2x"></i>
              <span className="badge fs-5">{cart?.length}</span>
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

