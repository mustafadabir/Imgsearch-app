import React,{useState,useEffect} from 'react'

const Pagination = ({currentPage,data}) => {
    const [pagenum,setPagenum] = useState(1);
    // on click on pagbuttons
    const prevPage = () => {
        setPagenum(pagenum - 1);
    }
    const nextPage = () => {
        setPagenum(pagenum + 1);
    }
    useEffect(()=>{
        currentPage(pagenum);
    },[pagenum,currentPage]);
  return (
     <>
      <div className="pagbutton mb-5">
        <a href="#"><button  disabled={pagenum<=1} type='button'className='mx-4' onClick={prevPage}> Prev</button></a>
        <a href="#"><button disabled={pagenum>=data} type='button' onClick={nextPage}>Next</button></a>
      </div>
    </>
  )
}

export default Pagination;