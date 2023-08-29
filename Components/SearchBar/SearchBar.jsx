import React from 'react'
import {useState,useEffect} from 'react'
import "./SearchBar.css"

function SearchBar(props) {

  const {getSearchText,searchtext} =props
  


  return (
    <div className='searchbar'>
      <form>
        <input type='text' value  ={searchtext.length>0?searchtext:''} onChange={(e)=>{getSearchText(e.target.value)}}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchBar