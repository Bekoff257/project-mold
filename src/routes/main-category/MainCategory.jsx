import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { instance } from '../../api/axios';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/product-card/ProductCard';
import "./MainCategory.scss"

function MainCategory() {
    const currentLang = useSelector(state => state.lang)

    const [ maincategoryData, setMainCategoryData ] = useState(null)
    const { categoryname } = useParams()
    console.log(categoryname)

    useEffect(() => {
        instance(`/category/categories/${categoryname}`.trim())
        .then(res => {
            setMainCategoryData(res.data)
            console.log(res)
        })
        .catch(err => console.log(err))
    }, [categoryname])


  return (
    <div className="container">
        <div className='mainCategory'>
        <div className="category_wrap">
        {
            maincategoryData?.maincategory.map(categoryItem => 
                <ProductCard productData={categoryItem}/>          
            )
        }
        </div>
    </div>
    </div>
  )
}

export default MainCategory