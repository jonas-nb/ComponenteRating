import React, { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import SetRatingPage from './SetRatingPage'
import ThanksPage from './ThanksPage'

const Box = () => {
    return (
        <div className="w-full min-h-screen bg-[#121417] flex justify-center items-center p-5">
            <div className="p-5 rounded-xl bg-[#252d37] max-w-[375px] w-full h-96">
                <Routes>
                    <Route path="/" element={<SetRatingPage />} />
                    <Route path="/thank-you" element={<ThanksPage />} />
                </Routes>
            </div>
        </div>
    )
}

export default Box
