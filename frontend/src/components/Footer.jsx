import React from 'react'
import {assets} from "../assets/assets.js"

export const Footer = () => {
  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text">
            <div>
                <img className="w-32 mb-5" src={assets.logo} alt="" />
                <p className="w-full md:w-2/3 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quo natus aspernatur suscipit ullam nobis accusantium? Repellat, optio, consequuntur ipsum aliquam, repellendus iusto ratione mollitia ducimus placeat dolorum inventore vero.</p>
            </div>

            <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col text-gray-600">
                    <li>+1-212-456-7890</li>
                    <li>contact@foreveryou.com</li>
                </ul>
            </div>

    
     </div>


        <div>
            <hr />
            <p className="py-5 text-sm text-center">Copyright 2024@ forever.com - All Right Reserved</p>
        </div>

    </div>
  )
}
