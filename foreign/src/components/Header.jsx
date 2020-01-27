import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Header(props) {
    return (

        <div className="header">

           
            <div>
                <select className='selecter1' onChange={props.selectorA} >
                    <option value="USD">US Dollar</option>
                    <option value="EUR">Euro Dollar</option>
                    <option value="GBP">British Pound</option>
                    <option value="CAD">Canadian Dollar</option>
                    <option value="CHF">Franc Swiss</option>
                    <option value="JPY">Japanese YEN</option>
                    <option value="AUD">Australian Dollar</option>
                    <option value="CNY">Chinese Yuan</option>
                    <option value="HKD">Honk Kong Dollar</option>
                    <option value="ISK">Icelandic Króna</option>
                    <option value="PHP">Philippine peso</option>
                    <option value="DKK">Danish Krone</option>
                    <option value="HUF">Hungarian Forint</option>
                    <option value="CZK">Czech Koruna</option>
                    <option value="RON">Romanian Leu</option>
                    <option value="SEK">Swedish Krona</option>
                    <option value="IDR">Indonesian Rupiah</option>
                    <option value="INR">Indian Rupee</option>
                    <option value="BRL">Brazilian Real</option>
                    <option value="RUB">Russian Ruble</option>
                    <option value="HRK">Croatian Kuna</option>
                    <option value="THB">Thai Baht</option>
                    <option value="MYR">Malaysian Ringgit</option>
                    <option value="BGN">Bulgarian Lev</option>
                    <option value="TRY">Turkish Lira</option>
                    <option value="NOK">Norwegian Krone</option>
                    <option value="NZD">New Zealand Dollar</option>
                    <option value="ZAR">South African Rand</option>
                    <option value="MXN">Mexican Peso</option>
                    <option value="SGD">Singapore Dollar</option>
                    <option value="ILS">Israeli Shekel</option>
                    <option value="KRW">South Korean Won</option>
                    <option value="PLN">Polish Złoty</option>
                </select>

                <select className='selecter2' onChange={props.selectorB} defaultValue={'EUR'}>
                    <option value="USD">US Dollar</option>
                    <option value="EUR" >Euro Dollar</option>
                    <option value="GBP">British Pound</option>
                    <option value="CAD">Canadian Dollar</option>
                    <option value="CHF">Franc Swiss</option>
                    <option value="JPY">Japanese YEN</option>
                    <option value="AUD">Australian Dollar</option>
                    <option value="CNY">Chinese Yuan</option>
                    <option value="HKD">Honk Kong Dollar</option>
                    <option value="ISK">Icelandic Króna</option>
                    <option value="PHP">Philippine peso</option>
                    <option value="DKK">Danish Krone</option>
                    <option value="HUF">Hungarian Forint</option>
                    <option value="CZK">Czech Koruna</option>
                    <option value="RON">Romanian Leu</option>
                    <option value="SEK">Swedish Krona</option>
                    <option value="IDR">Indonesian Rupiah</option>
                    <option value="INR">Indian Rupee</option>
                    <option value="BRL">Brazilian Real</option>
                    <option value="RUB">Russian Ruble</option>
                    <option value="HRK">Croatian Kuna</option>
                    <option value="THB">Thai Baht</option>
                    <option value="MYR">Malaysian Ringgit</option>
                    <option value="BGN">Bulgarian Lev</option>
                    <option value="TRY">Turkish Lira</option>
                    <option value="NOK">Norwegian Krone</option>
                    <option value="NZD">New Zealand Dollar</option>
                    <option value="ZAR">South African Rand</option>
                    <option value="MXN">Mexican Peso</option>
                    <option value="SGD">Singapore Dollar</option>
                    <option value="ILS">Israeli Shekel</option>
                    <option value="KRW">South Korean Won</option>
                    <option value="PLN">Polish Złoty</option>
                </select>
            </div>

            <form>
                <input type="text" name="currency1" onChange={props.updateTheVolumeOfCurrency}/><br />
                <button type="submit" value="Submit" onClick={props.calculator}>Submit</button><br />
             
            </form>


        </div>


    )


}


export default Header