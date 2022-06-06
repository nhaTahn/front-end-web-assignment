/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/destructuring-assignment */
import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const AppContext = createContext()

export const AppProvider = (props) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [newsList, setNewsList] = useState()
  async function fetchProductList() {
    try {
      const response = await axios.get('http://localhost:3000/product')
      setProductList(response.data)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  }
  async function fetchNews() {
    try {
      const response = await axios.get('http://localhost:3000/news')
      setNewsList(response.data)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  }
  useEffect(() => {
    fetchProductList()
    fetchNews()
  }, [])

 
  return (
    <AppContext.Provider
      value={{
        newsList,
        isLoggedIn,
        setIsLoggedIn
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider
