/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react'

// import ProductList from './product-list/index'
import NewsList from '../news-list/index'
import './index.css'

export default function MainContent() {
  const [show, setShow] = useState()

  useEffect(() => {
    setShow('order')
  }, [])

  const checkShow = () => {
    if (show === 'news') {
      return <NewsList />
    }
    return true
  }
  return (
    <div className="container">
      <nav className="nav-bar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <div
              role="button"
              tabIndex={0}
              className={show === 'order' ? 'nav-button-chosen' : 'nav-button'}
              onClick={() => setShow('order')}
            >
              <span className="btn-text">Đơn hàng</span>
            </div>
          </li>
          <li className="nav-item">
            <div
              role="button"
              tabIndex={0}
              className={show === 'product' ? 'nav-button-chosen' : 'nav-button'}
              onClick={() => setShow('product')}
            >
              
              <span className="btn-text">Sản phẩm</span>
            </div>
          </li>
          <li className="nav-item">
            <div
              role="button"
              tabIndex={0}
              className={show === 'news' ? 'nav-button-chosen' : 'nav-button'}
              onClick={() => setShow('news')}
            >
            
              <span className="btn-text">Tin tức</span>
            </div>
          </li>
        </ul>
      </nav>
      <main>{checkShow()}</main>
    </div>
  )
}
