import React, { useContext } from 'react'
import starIcon from '../assets/images/icon-star.svg'
import { Navigate, useNavigate } from 'react-router-dom'
import { MyContext } from '../Context'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const SetRatingPage = () => {
    const { rating, setRating } = useContext(MyContext)
    console.log(rating)
    const sendReply = useNavigate()
    const sendReplyFunction = () => {
        rating === 0
            ? toast.error('please rate it with a note.')
            : sendReply('/thank-you')
    }

    return (
        <div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3642506f] ">
                <img src={starIcon} alt="ícone de uma estrela" />
            </div>
            <article>
                <h1 className="text-white font-[500]">How did we do?</h1>
                <p className="text-[#7c8798] text-[0.8] leading-6">
                    Please let us know how we did with your support request. All
                    feedback is appreciated to help is improve our offering!
                </p>
            </article>
            <div className=" flex justify-around mt-5">
                <button
                    onClick={() => setRating(1)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3642506f] text-[#959eac] hover:bg-[#959eac] hover:text-[#121417] focus:bg-[#fb7413] focus:text-[#121417] duration-300"
                >
                    1
                </button>
                <button
                    onClick={() => setRating(2)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3642506f] text-[#959eac] hover:bg-[#959eac] hover:text-[#121417] focus:bg-[#fb7413] focus:text-[#121417] duration-300"
                >
                    2
                </button>
                <button
                    onClick={() => setRating(3)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3642506f] text-[#959eac] hover:bg-[#959eac] hover:text-[#121417] focus:bg-[#fb7413] focus:text-[#121417] duration-300"
                >
                    3
                </button>
                <button
                    onClick={() => setRating(4)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3642506f] text-[#959eac] hover:bg-[#959eac] hover:text-[#121417] focus:bg-[#fb7413] focus:text-[#121417] duration-300"
                >
                    4
                </button>
                <button
                    onClick={() => setRating(5)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3642506f] text-[#959eac] hover:bg-[#959eac] hover:text-[#121417] focus:bg-[#fb7413] focus:text-[#121417] duration-300"
                >
                    5
                </button>
            </div>
            <button
                onClick={sendReplyFunction}
                className="m-auto block w-[19rem] h-12 mt-5 rounded-[3rem] bg-[#ff8834] uppercase font-[700] text-white tracking-wider hover:bg-white hover:text-[#fb7413] duration-300"
            >
                submit
            </button>
            <ToastContainer
                theme="dark"
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            ></ToastContainer>
        </div>
    )
}

export default SetRatingPage
