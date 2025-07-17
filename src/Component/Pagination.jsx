import React from 'react'

const Pagination = ({totalPage,currentPage,page}) => {
    const pageNumber=[];
    for(let i=1; i<=totalPage; i++){
        pageNumber.push(i)
    }
  return (
    <>
        {pageNumber.map((pageNumber)=>(
            <button key={pageNumber} onClick={()=>page(pageNumber)}>
                {pageNumber}
            </button>
        ))}
        {/* <h2>Hello From Pagination File</h2> */}
    </>
  )
}

export default Pagination