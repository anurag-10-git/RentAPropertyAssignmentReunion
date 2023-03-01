import classes from "./PropertyCard.module.css";
import WishlistContext from "../../Context/whishlistContext";
import { useContext, useState } from "react";

const PropertyCard = ({ property }) => {
  const { wishlist, setWishlist } = useContext(WishlistContext);
  const [isAddedWish, setIsAddedWish] = useState(false);

  const addWishlistHandler = () => {
    if (wishlist.find((item) => item.name === property.name) !== undefined) {
      const newWishlist = wishlist.filter(
        (item) => item.id.toString() !== property.id.toString()
      );
      setIsAddedWish(false);
      setWishlist(newWishlist);
      return;
    }

    setWishlist((prev) => [
      {
        id: property.id,
        name: property.name,
        price: property.price,
        isWishlisted: true,
      },
      ...prev,
    ]);

    setIsAddedWish(true);
  };

  return (
    <div className={classes.card}>
      <img
        src={
          property.image
            ? property.image
            : "https://media.rightmove.co.uk/97k/96668/131803229/96668_163113718022023_IMG_06_0000.jpeg"
        }
        alt="property Img"
      />
      <div className={classes.content}>
        <div className={classes.price}>
          <span>
            ${property.price}
            <span className={classes.perMonth}>/month</span>
          </span>{" "}
          <span onClick={addWishlistHandler}>
            {/* <ion-icon
              className={classes.wishbtn}
              name="heart-outline"
            ></ion-icon> */}
            { isAddedWish ? <ion-icon className={classes.wishbtn} name="heart"></ion-icon>:<ion-icon className={classes.wishbtn} name="heart-outline"></ion-icon> }
          </span>
        </div>
        <h3>{property.name}</h3>
        <div className={classes.address}>{property.address} </div>
        <div className={classes.aboutHouse}>
          <span className={classes.eachAbout}>
            <span className="material-symbols-outlined propIcon">
              single_bed
            </span>
            {property.bedroom}
            <span className={classes.Icondetail}>bedroom</span>
          </span>
          <span className={classes.eachAbout}>
            <span className="material-symbols-outlined propIcon">shower</span>
            {property.washroom}{" "}
            <span className={classes.Icondetail}>washroom</span>
          </span>
          <span className={classes.eachAbout}>
            <span className="material-symbols-outlined propIcon">
              check_box_outline_blank
            </span>
            {property.sqft}
            <span className={classes.Icondetail}>sqft</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
