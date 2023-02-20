import React, { useContext, useState } from 'react';
import classes from './Mainsection.module.css';
import PropertyCard from './PropertyCard';
import propertyContext from '../Context/propertyContext';

const Mainsection = ({isFiltered, filteredSearch}) => {

  const { properties } = useContext(propertyContext);

  return (
    <section className={classes.Mainsection}>
      { isFiltered ? filteredSearch.map(property => <PropertyCard  key={property.id} property={ property }/>) : properties.map(property => <PropertyCard  key={property.id} property={ property }/>)}
    </section>
  )
}

export default Mainsection