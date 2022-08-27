import React from 'react'
import "../App.css"
import "../browser_style_reset.css"
import Search from './search/Search'
export default function App() {
    const handleOnSearchChange = (searchData) =>{
        console.log(searchData);
    }
  return (
    <div className='app'>
        <Search onSearchChange={handleOnSearchChange}/>
    </div>
  )
}
