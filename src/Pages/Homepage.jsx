import React, { useState } from 'react';
import Banner from '../Components/Banner';
import Filter from '../Components/Filter';
import Mainsection from '../Components/Mainsection';
import classes from './Homepage.module.css';

const Homepage = () => {

  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredSearch , setFilteredSearch] = useState([]);

  const startFilterHandler = (filteredProperties) => {
    setFilteredSearch(filteredProperties);
    setIsFiltered(true);
  }  

  return (
    <div className={classes.homepage}>
        <Banner />
        <Filter startFilterHandler={startFilterHandler}/>
        <Mainsection isFiltered={isFiltered} filteredSearch={filteredSearch}/>
    </div>
  )
}

export default Homepage