import React from 'react';
import CardItem from './CardItem';
import './Cards.css'
import pic1 from '../../images/cds_sme.png'
import pic2 from '../../images/cds_gov.png'
import pic3 from '../../images/dao_tao_anm.png'
import pic4 from '../../images/dich_vu_anm.png'
import pic5 from '../../images/giai_phap_anm.png'

export default function Cards(){
    return(
        <div className="cards">
            <div className="card_container">
                <div className="card_wrapper">
                    <h1>Chuyển đổi số</h1>
                    <ul className="cards_item">
                        <CardItem src={pic1} text='Chuyển đổi số SME' label='cds SME ' path='/services'/>
                        <CardItem src={pic2} text='Chuyển đổi số GOV' label='cds GOV' path='/services'/>
                    </ul>
                    <h1>An Ninh Mạng</h1>
                    <ul className='cards__items'>
                        <CardItem src={pic3} text='Giải pháp an ninh mạng' label='Mystery' path='/services'/>
                        <CardItem src={pic4} text='Dịch vụ an ninh mạng' label='Mystery' path='/services'/>
                        <CardItem src={pic5} text='Đào tạo an ninh mạng' label='Mystery' path='/services'/>
                    </ul>
                </div>
            </div>
        </div>
    );
}