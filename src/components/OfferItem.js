import React from "react";
import BundleModal from "./BundleModal";

const OfferItem = ({bundle}) => {    

    
    return ( 
        <li className="for-home__offers-item">
        <div className="for-home__offers-img-holder">
        <img src={bundle.bundleImage} className="for-home__offers-img" alt="Изображение кофейного сета" width="320" height="330" />
        </div>
            <p className="for-home__offers-title">{bundle.bundleTitle}</p>
            <ul className="for-home__offers-feature-list">
            {bundle.bundleFeatures.map( (feature, index) =>
        <li key={index} className="for-home__offers-feature">{feature}</li>
      )}

            </ul>
            <p className="for-home__offers-price">{bundle.bundlePrice.toString()} руб</p>
            <p className="for-home__offers-delivery">{bundle.bundleDelivery}</p>
            <BundleModal/>
        </li>
        
        
    );
}

export default OfferItem;