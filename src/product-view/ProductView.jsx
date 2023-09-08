import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { instance } from '../api/axios'
import "./ProductView.scss"
import { BiChevronRight } from "react-icons/bi"
import { BsRecordCircle } from "react-icons/bs"
import { AiOutlineShoppingCart } from "react-icons/ai"


function ProductView() {
    const [ selectedVariant, setSelectedVariant ] = useState(0)
    const [ itemCounter, setCounter ] = useState(1)
    const [ activeImageNumber, setActiveImage ] = useState(0)
    const [ dataProductView, setViewData ] = useState([])
    let productDataURL = useParams()
    
    useEffect(() => {
        instance(`/product/single-product/${productDataURL.id}`)
            .then(response => setViewData(response.data))
            .catch(err => console.log(err))
    }, [productDataURL.id])
    console.log(activeImageNumber);
    console.log(dataProductView);

    function decrement (){
        if(itemCounter > 1){
            setCounter(itemCounter - 1)
        }
    }

    function increment (){
        if(itemCounter < +dataProductView?.singleProduct[0].productSizesAndQuantity[selectedVariant].quantity){
            setCounter(itemCounter + 1)
        }
        console.log(dataProductView?.singleProduct[0])
        console.log(+dataProductView?.singleProduct[0].productSizesAndQuantity[selectedVariant].quantity)
    }

    console.log(selectedVariant);
  return (
        <div className="container">
            <div className='product-view'>
            {
                dataProductView.singleProduct?.map(viewProduct => 
                    <>
                        <div className="productView_header">
                            <div className="productView_left">
                                <img className='main_img' src={viewProduct.productImages[activeImageNumber]} alt="Image_" />
                                <div className="image_group">
                                    {
                                        viewProduct.productImages?.map((thumb, index) => 
                                            <img style={index === activeImageNumber ? {border: "3px solid dodgerblue"} : { border: "1px solid #000"}} className='imgr' width={150} height={150} src={thumb} alt="" onClick={() => setActiveImage(index)}/>
                                        )
                                    }
                                </div>
                            </div>
                            <div className='productView_right'>
                                <h1>{viewProduct.productName_uz}</h1>
                                <div className="path_way"><p>{viewProduct.productMainCategory_uz}</p> <BiChevronRight /> <p>{viewProduct.productSubCategory_uz}</p></div>
                                <div className="countOfProduct">
                                    <div className="sizeOf_Product">
                                        <span>Омборда: <h5 className='productCount'>{viewProduct.productSizesAndQuantity[selectedVariant].quantity}</h5></span>
                                        <h2 className='price'>33 0000 <h4 className='sum'>CУМ</h4></h2>
                                        <div className="pathWay_info">
                                            {/* <BsRecordCircle /> <p className='info_category'></p> */}
                                            <ul className='info_main'>
                                            {viewProduct.productDescription_ru.map(info => 
                                                <li><BsRecordCircle />{info}</li>
                                            )}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='selectSize'>
                                        <p>Ўлчам: </p>
                                        <select id="select" onChange={(e) => {
                                            setSelectedVariant(+e.target.value)
                                            
                                            }}>
                                            {
                                                viewProduct?.productSizesAndQuantity.map((productItemVariant, ind) => 
                                                    <option value={ind}>{productItemVariant.size}</option>    
                                                )
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="productView_bottom">
                                        <div className="main_bottom">
                                        <p>Сони: </p>
                                        <div className="counterBtn">
                                            <div className="btn_group">
                                                <button className='incr' onClick={decrement}>-</button>
                                                <span className='counted_num'>{itemCounter}</span>
                                                <button className='decr' onClick={increment}>+</button>
                                            </div>
                                        </div> 
                                        </div> 
                                        <div className="main_bottom">
                                            <p>Умумий нархи: </p>
                                            <button className='price_num'>{itemCounter * +dataProductView?.singleProduct[0].productSizesAndQuantity[selectedVariant].price}</button>
                                        </div>              
                                    <div className="main_bottom">
                                     <button className='cardshop_btn'><AiOutlineShoppingCart /> Саватга қўшиш</button>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
        </div>
  )
}

export default ProductView