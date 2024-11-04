import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

const ReviewCard = ({ src, name, text, ratingVal }) => {

    const [rating, setRating] = useState(ratingVal ? ratingVal : 3);

    return (
        <div className="relative w-[380px] py-10 shadow-md rounded-tl-[40px] rounded-br-[40px] bg-white pb-10 pt-16 flex text-center flex-col items-center px-4">
            {/* customer img */}
            <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 z-50 bg-red-300 w-[100px] h-[100px] rounded-full">
                <img
                    src={src}
                    alt={"customerImg"}
                    className="w-full h-full rounded-full"
                />
            </div>
            {/* star */}

            <div className="flex space-x-1 mt-5">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={`cursor-pointer text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-400'
                            }`}
                    >
                        ★
                    </span>
                ))}
            </div>

            {/* Name & designation */}
            <div>
                <h3 className="font-montserrat font-bold text-base pt-6 text-prh2">
                    {name}
                </h3>
            </div>

            <p className="pt-2 h-[10vw] px-2 overflow-hidden font-montserrat font-normal text-base text-prh max-w-[380px] leading-6">
                {
                    text ? text.slice(0, 230) + "......" :
                        `Lorem ipsum dolor sit amet consectetur. Tortor massa nisl
                quam sit. Vitae congue ultrices neque penatibus mi in
                quisque. Leo in cursus enim magnis ante. Proin iaculis
                platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt
                tempus semper`
                }
            </p>
        </div>
    )
}

export default ReviewCard