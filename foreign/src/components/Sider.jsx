import React, { useState, useEffect } from 'react';
import axios from 'axios'
import USD from '../currencies_icon/usdollar.png'
import EURO from '../currencies_icon/euro.png'
import POUND from '../currencies_icon/pound.png'
import CANADA from '../currencies_icon/canadian.png'
import SWISS from '../currencies_icon/swiss.png'
import YEN from '../currencies_icon/japan.png'
import AUSTRALIA from '../currencies_icon/australia.png'
import CHINA from '../currencies_icon/china.png'



function Sider(props) {
    return (

        <div className="sider">
            <div onClick={props.changeCurrency} data-name="usd" className="currencyIcons"><img className='Icon' src={USD} alt={'US Dollar'}/></div>
            <div onClick={props.changeCurrency} data-name="eur" className="currencyIcons"><img className='Icon' src={EURO} alt={'Euro Dollar'}/></div>
            <div onClick={props.changeCurrency} data-name="gbp" className="currencyIcons"><img className='Icon' src={POUND} alt={'British Pound'}/></div>
            <div onClick={props.changeCurrency} data-name="cad" className="currencyIcons"><img className='Icon' src={CANADA} alt={'Canadian Dollar'}/></div>
            <div onClick={props.changeCurrency} data-name="chf" className="currencyIcons"><img className='Icon' src={SWISS} alt={'Swiss Franc'}/></div>
            <div onClick={props.changeCurrency} data-name="jpy" className="currencyIcons"><img className='Icon' src={YEN} alt={'Yen'}/></div>
            <div onClick={props.changeCurrency} data-name="aud" className="currencyIcons"><img className='Icon' src={AUSTRALIA} alt={'Australian Dollar'}/></div>
            <div onClick={props.changeCurrency} data-name="cny" className="currencyIcons"><img className='Icon' src={CHINA} alt={'Yuan'} /></div>
        </div>
    )


}


export default Sider