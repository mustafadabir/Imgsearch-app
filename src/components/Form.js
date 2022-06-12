import React,{useState} from 'react'

const Form = ({searchData}) => {
    const [search,setSearch] = useState('');
  const [value,setValue] = useState('Image');

   // on change
  const inputEvent = (e) => {
      setSearch(e.target.value);
  };
    // on submit
  const onsubmit = (e) => {
    e.preventDefault();
    searchData(search);
    setValue(search)
    setSearch('');
  }
  return (
     <>
      <div className="container hero-section">
        <div className="d-flex flex-wrap">
          <div className="col-12">
            <h2 className='text-center'>{value}</h2>
          </div>
          <div className="col-12">
            <div className="search_bar">
              <form className="d-flex" onSubmit={onsubmit}>
                <input type="text" placeholder='Search' value={search} onChange={inputEvent}/>
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form;