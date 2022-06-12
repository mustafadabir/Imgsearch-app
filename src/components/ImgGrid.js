import React from 'react'
import Pagination from './Pagination';

const ImgGrid = ({currentPage,images}) => {
    const currentpage = data => currentPage(data);
  return (
   <>
      <div className="contain mb-5">
        {images.map((img,key)=>{
          return(
             <div className="image" key={key}>
          <img src={img.urls.thumb} alt="imagesearch" />
          <div className="detail">
            <p>{img.user.username}</p>
            <a href={img.links.download} target='_blank' rel='noreferrer'><i className="fa-solid fa-download"></i></a>
          </div>
        </div>
          )
        })}
      </div>
        <Pagination currentPage={currentpage} data={images}/>
    </>
  )
}

export default ImgGrid;