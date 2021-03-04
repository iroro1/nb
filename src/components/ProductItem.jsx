import React from "react";

const ProductItem = (props) => {
  const { image, title, price, subTitle, bg, fav } = props;

  return (
      <div style={{ background: bg }} >
        <div className="product">
          <img src={image} alt="product" className="product-image" />
          <div className="container ml-3">
            <h3>{title}</h3>
            <div className="row btm-bar">
              <p className="ml-3 mr-2">
                <b className="mr-2"> N {price}</b>
                <small>{subTitle}</small>
              </p>

               {
                    fav===true?<i className="fa fa-heart hrt" 
                   > </i>:
                    <i className="fa fa-heart-o hrt"> </i>
                  
                  }
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductItem;
