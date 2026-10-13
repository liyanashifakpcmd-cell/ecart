function Pagination({
  totalProducts,
  cardPerPage,
  currentPage,
  setCurrentPage
}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalProducts / cardPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
    <button className='btn' onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage==1}>
        <i className="fa-solid fa-backward"></i>
    </button>
      {pages.map(page => (
        <button
          key={page}
          className={`btn mx-2 ${currentPage==page?' btn-warning text-light':''}`
           
          }
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      <button disabled={currentPage==pages.atlength} onClick={()=>setCurrentPage(currentPage+1) } className="btn">
<i className="fa-solid fa-forward"></i>
      </button>
    </>
  );
}

export default Pagination;