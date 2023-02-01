import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import api from '../../../services/productAPI'
import { NumericFormat } from 'react-number-format'

// DayJS
import dayjs from "dayjs"
import thai from "dayjs/locale/th"
import relativeTime from "dayjs/plugin/relativeTime"
import buddhistEra from "dayjs/plugin/buddhistEra"

dayjs.locale(thai)
dayjs.extend(relativeTime)
dayjs.extend(buddhistEra)

const Reststrapi = () => {
  document.title = "Rest API with Strapi"

  // State for products data
  const [products, setProducts] = useState([]);

  // read all products
  const readAllProducts = () => {
    api.getAllProduct().then((response) => {
      setProducts(response.data)
    })
  }

  // initial load
  useEffect(() => {
    readAllProducts()
  }, [])

  // console.log(products)

  return (
    <>
      <div className="flex my-6">
          <h1 className="text-2xl text-black pb-6">Product ({products.length})</h1>
          <p className="flex-1 text-right">
            <NavLink to="/addproduct" className="border-green-500 border-2 rounded-sm px-2 py-1 mb-2 hover:text-white hover:bg-green-500 text-xl">+ เพิ่มรายการ</NavLink>
          </p>
      </div>

      <div className="w-full">
        <div className="bg-white overflow-auto">
          <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 text-gray-500 uppercase font-medium text-xs text-left tracking-wider">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th className="px-5 py-3">
                  Qty
                </th>
                <th className="px-5 py-3">
                  Category
                </th>
                <th className="px-5 py-3">
                  Created
                </th>
                <th className="px-5 py-3">
                  Updated
                </th>
                <th className="px-5 py-3 text-right">
                  Manage
                </th>
              </tr>
            </thead>
            <tbody>
              { 
              products.map((product, index) => (
              
              <tr key={index}>

                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      {
                        product.image ?
                        <img
                          className="w-full h-full rounded-full"
                          src={import.meta.env.VITE_BASE_URL_API+product.image[0].url}
                        />
                        :
                        <img className="h-10 w-10 rounded-full" src="/assets/images/noimg.jpg" />
                      }
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {product.title && product.title.substring(0, 24)} ..
                      </div>
                      <div className="text-sm text-gray-500">
                        {product.description && product.description.substring(0, 24)} ..
                      </div>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-5 border-b">
                  <p className="text-gray-900 whitespace-no-wrap">
                    <NumericFormat 
                    value={product.price} 
                    fixedDecimalScale={true}
                    decimalScale={2}
                    displayType={'text'}
                    thousandSeparator={true}
                    /> บาท
                  </p>
                </td>

                <td className="px-5 py-5 border-b">
                  <p className="text-gray-900 whitespace-no-wrap">
                  {product.qty}
                  </p>
                </td>

                <td className="px-5 py-5 border-b ">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {product.category.title}
                  </p>
                </td>

                <td className="px-5 py-5 border-b text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {dayjs(product.created_at).format("D MMMM BBBB H:m:s")}
                  </p>
                </td>

                <td className="px-5 py-5 border-b text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {dayjs(product.updated_at).fromNow()}
                  </p>
                </td>

                <td className="px-5 py-5 border-b text-sm text-right">
                  <p className="text-gray-900 whitespace-no-wrap">
                    <a href="#edit" className="border-yellow-500 border-2 rounded-sm px-3 py-1 hover:text-white hover:bg-yellow-500">แก้ไข</a> &nbsp;
                    <a href="#delete" className="border-red-500 border-2 rounded-sm px-3 py-1 hover:text-white hover:bg-red-500">ลบออก</a>
                  </p>
                </td>

              </tr>

              ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Reststrapi
