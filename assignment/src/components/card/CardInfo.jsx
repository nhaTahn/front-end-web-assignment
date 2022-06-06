import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

export default function Cards(){
    return(
        <div className="cards">
            <div className="card_container">
                <div className="card_wrapper">
                    <h1>Thành viên nhóm</h1>
                    <ul className="cards_item">
                        <CardItem src={''} text='Bùi Đoàn Gia Phong' label='Info' path='/' shorttext='abcdddsscx'/>
                        <CardItem src={''} text='Lâm Nhật Tân' label='Info' path='/'/>
                    </ul>
                    <ul className='cards__items'>
                        <CardItem src={''} text='' label='Info' path='/'/>
                        <CardItem src={''} text='' label='Info' path='/'/>
                         </ul>
                </div>
            </div>
        </div>
    );
}