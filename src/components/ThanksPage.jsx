import React, { useContext } from 'react'
import { MyContext } from '../Context'
import thanksIcon from '../assets/images/thanks.svg'
const ThanksPage = () => {
    const { rating } = useContext(MyContext)
    return (
        <div className="flex flex-col items-center justify-around">
            <img
                className="mt-5 w-40"
                src={thanksIcon}
                alt="
illustration of a cell with card and circle"
            />
            <div className="w-56 h-10 bg-[#3642506f] text-lg p-2 mt-5 rounded-3xl flex items-center justify-center text-[#fb7413] ">
                You select {rating} out of 5
            </div>
            <article className="text-center">
                <h1 className="text-white font-[500]">Thank you!</h1>
                <p className="text-[#959eac]">
                    We appreciate you taking the time to give a rating, if you
                    ever need more support, don't hesitate to get in touch!
                </p>
            </article>
        </div>
    )
}

export default ThanksPage
