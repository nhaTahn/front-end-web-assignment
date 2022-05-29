import React from 'react';
import CardItem from './CardItem';
import './Cards.css'
import pic1 from '../../images/img-2.jpg'
export default function Cards(){
    return(
        <div className="cards">
            <h1>Check out</h1>
            <div className="card_container">
                <div className="card_wrapper">
                    <ul className="cards_item">
                        <CardItem
                            src={pic1}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src={""}
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                        <CardItem
                            src='../../images/img-2.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src={""}
                        text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                        label='Mystery'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}