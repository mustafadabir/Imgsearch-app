import{ useEffect, useState } from 'react';
import axios from 'axios';

const Apikey = 'E9suqgKiaF687uB7sVL6ObZR7nbnUkvMLf9dF7ghovM';
const RandomImage = (currentPage) => {
    const [data,setData] = useState([]);
    
    useEffect(()=>{
        axios
        .get(`https://api.unsplash.com/photos/?page=${currentPage}&per_page=30&client_id=${Apikey}`)
        .then(data=>setData(data.data));
    },[currentPage]);
  return data;
}

//search data
const Searchimg = (currentPage,search) => {
    const [query,setQuery] = useState([]);

    useEffect(()=>{
        axios
.get(`https://api.unsplash.com/search/photos?page=${currentPage}&per_page=30&query=${search}&client_id=${Apikey}`)
        .then(data=>setQuery(data.data.results));
    },[currentPage,search]);
    return query;
}

export {RandomImage,Searchimg};