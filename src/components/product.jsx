import React from "react";
import PropTypes from "prop-types";

const Product = ({ id, image, title, price, description, rating }) => {
  return (
    <div key={id} className="col-4">
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{price}</h6>
          <p className="card-text">{description}</p>
          <button className="btn btn-primary">
            Buy now
          </button>
        </div>
        <div className="card-footer">
          <small className="text-muted">rating {rating.rate}</small>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    rate: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired
  }).isRequired
};

export default Product;