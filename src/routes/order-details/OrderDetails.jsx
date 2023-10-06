import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { instance } from '../../api/axios'

function OrderDetails() {
  const locInfo = useParams()
  const [ ordersData, setOrdersData ] = useState([])

  console.log(locInfo);

  useEffect(() => {
    instance(`/order/all-orders`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('usertoken')}`
      }
    }, [])
    .then(res => {
      setOrdersData(res.data.allOrders)
      console.log(res.data)
    })
    .catch(err => console.log(err))
  })

  let contaced = ordersData?.filter(item => item.contacted === true)
  let notContacted = ordersData?.filter(item => item.contacted === false)

  return (
    <div>OrderDetails</div>
  )
}

export default OrderDetails