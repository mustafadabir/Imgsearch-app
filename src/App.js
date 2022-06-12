import React,{useState} from 'react';
import './index.css';
import {RandomImage,Searchimg} from './components/Api';
import Form from './components/Form';
import ImgGrid from './components/ImgGrid';
const App = () => {
    const [search,setSearch] = useState('');
    const [currentPage,setCurrentpage] = useState(1);

    // pagination data
    const currentpage = data => setCurrentpage(data);

    // form data
    const searchdata = data => setSearch(data);

    const Randomimg = RandomImage(currentPage);
    const searchimg = Searchimg(currentPage,search);
  return (
    <>
        <div className="container-fuild">
            <h1 className='text-center header'>Img</h1>
        </div>
        <Form searchData={searchdata}/>
        {searchimg && search && searchimg.length === 0 && ( <h2 className='text-center'>No result found</h2> )}
        {search ? (<ImgGrid currentPage={currentpage} images={searchimg}/>) :
        (<ImgGrid currentPage={currentpage} images={Randomimg}/>)}
        <div className="container-fuild mt-5 footer">
            <p className="text-center py-3 text-white">Develop by <a href="#">Mustafa dabir</a></p>
        </div>
    </>
  )
}

export default App;