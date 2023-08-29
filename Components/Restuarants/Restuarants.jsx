import React, { useEffect, useState } from 'react'
import RestuarantCard from '../RestuarantCard/RestuarantCard';
import { apiURL } from '../utils/utils';
import "./Restuarants.css"
import SearchBar from '../SearchBar/SearchBar'
import { data } from '../utils/demo';

const Restuarants=()=>{

const [restuarants, setrestuarants] = useState(data)
const [restuarantList, setrestuarantList] = useState(data)

const [loading, setloading] = useState(false)
const [searchText, setSearchText] = useState("")


// useEffect(() => {
//     getRestuarants()
// }, [])

useEffect(()=>{
  filterSearchRestuatrants();
},[searchText])

// useEffect(()=>{

// },searchText)

const getRestuarants =async ()=>{
  await fetch(apiURL)
  .then(res=>res.json())
  .then(res=>{
    setrestuarants(res.data?.cards[5].card?.card?.gridElements?.infoWithStyle?.restaurants);
  console.log(restuarants);
    setloading(false);
    setrestuarantList(res.data?.cards[5].card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(restuarantList,"reslist");
  })

}

const getSearchText=(e)=>{
  setSearchText(e)
}

const filterSearchRestuatrants=()=>{

  const newresList=restuarants.filter(res=>res.info?.name?.toLowerCase().includes(searchText.toLowerCase()))
  setrestuarantList(newresList)
}

//  restuarantList = restuarants?;



{
  if(loading){
  return <h1>loading</h1>
  }
}

  return (
    <>
    <SearchBar getSearchText={getSearchText} searchtext={searchText}/>
    <div className='restuarants-container'>
        {
          restuarantList?.map(( {info:{name,areaName,avgRating,cloudinaryImageId,cuisines}} )=>{
          return  <RestuarantCard name={name} key={cloudinaryImageId} area={areaName} avgRating={avgRating} cuisines={cuisines} cloudinaryImageId={cloudinaryImageId}  />
          })
        }
    </div>
    </>
  )
}

export default Restuarants