import React from 'react'

export default function Banner() {
    return (
        <div  className= "">
            <div className="hero bg-base-200 ">
                <div className="w-full flex-col lg:flex-row-reverse">
                    <div className="carousel w-full h-96">
                        {/* Slide No 1 */}
                        <div id="slide1" className="carousel-item relative w-full items-center justify-center">
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold px-10">Unlock a World of Stories</h1>
                                <p className="px-10 mt-5" >
                                    Find Your Next Favorite Book at Islamia Book House
                                </p>
                                <div className="flex items-center justify-center lg:mt-10 sm:mt-5">
                                    <button className="btn btn-accent hover:text-orange-500">Buy Book</button>
                                </div>
                            </div>
                            <img
                                src={'banner1.avif'}
                                className="carousel-item w-1/2 h-full " />
                        </div>
                        {/* Slide no 2 */}
                        <div id="slide2" className="carousel-item relative w-full">
                            <img
                                src={'banner2.avif'}
                                className="w-full h-full" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                       {/* Slide no 3 */}

                        <div id="slide3" className="carousel-item relative w-full">
                            <img
                                src={'banner3.avif'}
                                className="w-full h-full" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                       {/* Slide no 4 */}

                        <div id="slide4" className="carousel-item relative w-full">
                            <img
                                src={'banner4.avif'}
                                className="w-full h-full" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
