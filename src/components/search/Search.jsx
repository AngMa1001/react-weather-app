
import React, {useState} from 'react'
import { AsyncPaginate } from 'react-select-async-paginate';
import {GEO_API_URL, geoApiOptions} from '../util/api';

export default function Search(props){
  const [search,setSearch] = useState(null);
  const searchBarPlaceHolder = document.querySelector(".css-14el2xx-placeholder")
  // searchBarPlaceHolder.addEventListener("click", ()=>{
  //   searchBarPlaceHolder.innerT = "";
  // })
  function handleOnChange(searchData){
    // console.log(searchData);
    setSearch(searchData);
    props.onSearchChange(searchData);
  }
  function loadOptions(inputValue){
    // console.log(GEO_API_URL);
    return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
    .then(response => response.json())
    .then(response => {
      return{
        options: response.data.map((city)=>{
          return{
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name},${city.countryCode}`,
          }
        })
      }
    })
    .catch(err => console.error(err));

  }
  return (
    <div className='search-bar'>
      <AsyncPaginate 
        placeholder="Search for city"
        debounceTimeout={800}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </div>
  )
}
