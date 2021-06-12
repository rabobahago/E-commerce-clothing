import React from "react";
import CustomButton from "../custom-button/custom-button";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import "./collection-item.scss";
const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, price, name } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">
          {"\u{20A6}"}
          {price}
        </span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
