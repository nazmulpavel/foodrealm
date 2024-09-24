import React from 'react'

export default function Card({ book }) {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={book.image}
                        alt={book.bookName} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {book.bookName}
                        <div className="badge badge-primary text-sm">Rating:{book.rating}</div>
                    </h2>
                    <p>{book.author}</p>
                    <p className="badge badge-info">{book.category}</p>

                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{book.tags[0]}</div>
                        <div className="badge badge-outline">{book.tags[1]}</div>
                        <div className="badge badge-outline">{book.tags[2]}</div>

                    </div>
                    <div className="flex items-center justify-center lg:mt-10 sm:mt-5">
                        <button className="btn btn-primary w-1/2 items-center justify-center">View details</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
