import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

function HomeItem({ item }) {
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;
  console.log(item.id, elementFound);
  const dispatch = useDispatch();
  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {elementFound ? (
        <button
          type="button"
          class="btn-add-bag btn btn-danger"
          onClick={handleRemove}
        >
          <MdOutlineRemoveShoppingCart />
          Remove
        </button>
      ) : (
        <button
          type="button"
          class="btn-add-bag btn btn-success"
          onClick={handleAddToBag}
        >
          <MdOutlineAddShoppingCart />
          Add to Bag
        </button>
      )}
    </div>
  );
}

export default HomeItem;
