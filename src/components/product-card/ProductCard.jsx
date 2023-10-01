import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { DefaultButton } from '../../utils/Utils';
import "./ProductCard.scss";
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { FaHandPointer } from "react-icons/fa"

const ProductCard = ({productData}) => {
  const dispatch = useDispatch()

  const { t } = useTranslation();
  const crLangForProductData = useSelector(state => state.language.lang)
  function addToCart(product){
    product.selectedType = product.productSizesAndQuantity[0]
    product.count = 1
    product.totalPrice = product.productSizesAndQuantity[0].price * 1
    console.log(product)
    dispatch({product, type: 'ADD_TO_CART'})
    toast.success(t('addedCart.added'))
}
  return (
    <div className='product-card'>
      <Link to={`/product-view/${productData._id}`}><img src={productData.productImages[0]} alt="" /></Link>
      <h3 title={ crLangForProductData == 'uz' ? productData.productName_uz : productData.productName_ru}>{ crLangForProductData == 'uz' ? productData.productName_uz.length > 20 ? productData.productName_uz.slice(0, 20) + '...' : productData.productName_uz : productData.productName_ru.length > 20 ? productData.productName_ru.slice(0, 20) + '...' : productData.productName_ru}</h3>
      <div className="product-card__categories">
        <span>{productData.productMainCategory_ru}</span> <FiChevronRight /> <span>{productData.productSubCategory_ru}</span>
      </div>
      <div className="product-card__price">
      {`${productData?.productSizesAndQuantity[0].price}${productData?.productSizesAndQuantity.length > 1 ? " СУМ" + " - " +  productData?.productSizesAndQuantity[productData?.productSizesAndQuantity.length - 1].price : ""} СУМ`}
      </div>
      { productData.productSizesAndQuantity.length > 1 ? <Link to={`/product-view/${productData._id}`} className='default-btn'><FaHandPointer /> {t('button.select')}</Link>  : <DefaultButton f={() => addToCart(productData)} text={t('button.btn')} />}
    </div>
  )
}

export default ProductCard