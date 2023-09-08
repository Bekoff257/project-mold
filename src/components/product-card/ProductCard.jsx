import React from 'react';
import { DefaultButton } from '../../utils/Utils';
import "./ProductCard.scss";
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

const ProductCard = ({productData}) => {
  console.log(productData);
  return (
    <div className='product-card'>
      <Link to={`/product-view/${productData._id}`}><img src={productData.productImages[0]} alt="" /></Link>
      <h3>{productData.productName_uz}</h3>
      <div className="product-card__categories">
        <span>{productData.productMainCategory_ru}</span> <FiChevronRight /> <span>{productData.productSubCategory_ru}</span>
      </div>
      <div className="product-card__price">
      {`${productData?.productSizesAndQuantity[0].price}${productData?.productSizesAndQuantity.length > 1 ? " СУМ" + " - " +  productData?.productSizesAndQuantity[productData?.productSizesAndQuantity.length - 1].price : ""} СУМ`}
      </div>
      <DefaultButton text="Саватга қўшиш"/>
    </div>
  )
}

export default ProductCard