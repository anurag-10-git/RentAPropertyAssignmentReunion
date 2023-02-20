import React from 'react';
import classes from './Banner.module.css';
import BannerImg from '../assets/book-img.svg';

const Banner = () => {
  return (
    <div className={classes.banner}>
            <img className={classes.mainImage} src={BannerImg} alt="" />
           <div className={classes.companyDescription}>
            <h1>Looking for a Place ?. We got some!</h1>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus eos veniam autem est repellendus possimus quod perspiciatis culpa sint.</p> */}
            <p>Rent a beautiful house for your family, friends or just yourself. Choose from flats in societies, individual apartments, bungalows and villas.  </p>
            <button className={classes.contactBtn}>Contact Us</button>
           </div>
    </div>
  )
}

export default Banner