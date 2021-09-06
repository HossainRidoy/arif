import React, { useState } from 'react'
import "./less_more.scss"
const Less_more = (props) => {
    const [more_less, setmore_less] = useState(true)
    let limit_word = props.des.split("").slice(0, 250).join("")

    const mor_less_click = () => {
        setmore_less(!more_less)
    }
    return (
        <>
            {more_less ? <div>
                <p className="font-size-18 text-black text-align-justify"> {limit_word}...</p>
                <button id="more_less" className=" mt-4" onClick={mor_less_click}>আরো দেখুন</button>
            </div> : <div>
                <p className="font-size-18 text-black text-align-justify"> {props.des}</p>
                <button id="more_less" className=" mt-4" onClick={mor_less_click}>বন্ধ করুন</button>
            </div>}


        </>
    )
}

export default Less_more
