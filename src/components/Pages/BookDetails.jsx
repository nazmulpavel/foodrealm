import React from 'react'

import { useLocation } from "react-router-dom";
import book from '../data.json'




export default function BookDetails() {
    const location = useLocation();
  
    const { item } = location.state || {};



    // const params = useParams();
    console.log("-----yyyy",item);



// console.log("11111122222211",item)

    // console.log("-----xxxx",params.bookId);


    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eum!</p>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="w-1/2 h-80 rounded-lg shadow-2xl" />
                    <div className="w-1/2" >
                        <h1 className="text-2xl font-bold">Box Office <span className="text-orange-600">orange text</span>
                            News!</h1>
                        <div className="flex  p-4 m-4">
                            <p className="m-2"> By:<span className="text-green-500">Michell</span> </p>
                            <p className="m-2"> Rating: <span className="text-green-500">Michell</span> </p>
                        </div>
                        <p className=""> Review: <span className="text-green-500">Michell</span> </p>
                        <div className="flex items-center ">
                            <div className="badge badge-outline m-2">Fashion</div>
                            <div className="badge badge-outline m-2">Products</div>
                            <div className="badge badge-outline m-2">Products</div>
                        </div>


                        <div className="flex items-center justify-center">
                            <p className="m-4 p-4 w-40 "> Book length:<br /> 105 pages </p>
                            <p className="m-4 p-4"> Publishing year:<br /> 2009 </p>
                            <p className="m-4 p-4"> Publishers: <br /> kutub publishers</p>
                        </div>

                        <div className="flex items-center">
                            <button className="btn btn-secondary m-10 p-4">Wish to Read</button>
                            <button className="btn btn-secondary m-10 p-4">Add to cart</button>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}
