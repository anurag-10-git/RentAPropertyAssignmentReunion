import React, { useContext } from "react";
import WishlistContext from "../../../Context/whishlistContext";
import classes from "./WishlistItem.module.css";

const WishlistItem = (props) => {
  const { wishlist, setWishlist } = useContext(WishlistContext);

  const removeWishHandler = () => {
    const newWishlist = wishlist.filter(
      (item) => item.id.toString() !== props.id.toString()
    );
    setWishlist(newWishlist);
  };

  return (
    <div className={classes.wishlistItem}>
      <span className={classes.name}>{props.name}</span>
      <span className={classes.price}>
        ${props.price}
        <span onClick={removeWishHandler}>
          <ion-icon name="close-circle-outline"></ion-icon>
        </span>
      </span>
    </div>
  );
};

export default WishlistItem;
