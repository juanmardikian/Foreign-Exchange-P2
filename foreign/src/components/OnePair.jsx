import React from 'react';






function OnePair(props) {
    return (

        <div className='diplayedCurrencies'>

            <h1 className='diplayedCurrencies'>{props.theImput} {props.selector1} = {props.calcResult && props.calcResult.toFixed(3)} {props.selector2}</h1>
            {console.log(props.calcResult)}

        </div>



    )

}


export default OnePair

