import React from 'react'
import { instance } from '../../api/axios'
import { useEffect, useState } from 'react'
import "./SubCategory.scss"
import { useParams } from 'react-router-dom'
import ProductCard from '../product-card/ProductCard'

function SubCategory() {
    const [ subcategory, setSubCategory ] = useState(null)

    let { subcategoryname } = useParams()

    useEffect(() => {
        instance(`/category/subcategories/${subcategoryname}`)
            .then(response => {
                setSubCategory(response.data)
            })
            .catch(err => console.log(err))

    }, [subcategoryname])

  return (
    <div className="container">
        <div className='subcategory'>
        <div className="sub_wrap">
        {
            subcategory?.subCategory.map(itm => 
                <ProductCard productData={itm}/>    
            )
        }
        </div>
    </div>
    </div>
  )
}

export default SubCategory