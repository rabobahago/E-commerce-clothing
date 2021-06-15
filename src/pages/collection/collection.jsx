import React from "react";
import "./collection.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
//import collectionItem from "../../components/collection-item/collection-item";

const CollectionPage = ({ collection }) => (
  <div className="collection-page">{<h2>Collection Page</h2>}</div>
);
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
