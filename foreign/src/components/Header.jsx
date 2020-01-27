import React, {useState, useEffect} from 'react';
import axios from 'axios'

function Header() {
return (

    <div className="header">

<h1>Header</h1>


<select>
  <option value="USD">US Dollar</option>
  <option value="EUR">Euro Dollar</option>
  <option value="GBP">British Pound</option>
  <option value="CAD">Canadian Dollar</option>
  <option value="CHF">Franc Swiss</option>
  <option value="YEN">Japanese YEN</option>
  <option value="AUD">Australian Dollar</option>
  <option value="CNY">Chinese Yuan</option>
  <option value="HKD">Honk Kong Dollar</option>
  <option value="ISK">Icelandic Króna</option>
  <option value="PHP">Philippine peso</option>
  <option value="DKK">Danish Krone</option>
  <option value="HUF">Hungarian Forint</option>
  <option value="CZK">Czech Koruna</option>
  <option value="RON">Romanian Leu</option>

</select>


{/* 








SEK: 9.548074309
IDR: 13595.7498867241
INR: 71.2913457182
BRL: 4.1761667422
RUB: 61.7754417762
HRK: 6.7435432714

THB: 30.5600362483


MYR: 4.0649750793
BGN: 1.7723606706
TRY: 5.9391934753

NOK: 9.0054372451
NZD: 1.5119166289
ZAR: 14.3710919801

MXN: 18.7739012234
SGD: 1.3511554146

ILS: 3.452650657
KRW: 1168.210240145
PLN: 3.8572723154 */}


    </div>
)


}


export default Header