import React from 'react';
import { DefaultButton } from '../../utils/Utils';
import "./ProductCard.scss";
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { FaHandPointer } from "react-icons/fa"

const ProductCard = ({productData}) => {
  console.log(productData);
  return (
    <div className='product-card'>
      <Link to={`/product-view/${productData._id}`}><img src={productData.productImages[0]} alt="" /></Link>
      <h3 title={productData.productName_uz}>{productData.productName_uz.length > 20 ? productData.productName_uz.slice(0, 20) + '...' : productData.productName_uz}</h3>
      <div className="product-card__categories">
        <span>{productData.productMainCategory_ru}</span> <FiChevronRight /> <span>{productData.productSubCategory_ru}</span>
      </div>
      <div className="product-card__price">
      {`${productData?.productSizesAndQuantity[0].price}${productData?.productSizesAndQuantity.length > 1 ? " СУМ" + " - " +  productData?.productSizesAndQuantity[productData?.productSizesAndQuantity.length - 1].price : ""} СУМ`}
      </div>
      { productData.productSizesAndQuantity.length > 1 ? <Link to={`/product-view/${productData._id}`} className='default-btn'><FaHandPointer /> Танлаш</Link>  : <DefaultButton text="Саватга қўшиш"/>}
    </div>
  )
}

export default ProductCard