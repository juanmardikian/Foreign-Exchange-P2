import React, { useState, useEffect } from 'react';
import Facebook from '../images/facebook.png'
import Linkedin from '../images/linkedin.png'
import Twitter from '../images/twitter.png'

function Footer() {


    return (

        <div className="footer">
            <div>
                <img className="linkedin" src={Linkedin}></img>
                <img className="twitter" src={Twitter}></img>
                <img className="facebook" src={Facebook}></img>


            </div>
        </div>
    )
}


export default Footer