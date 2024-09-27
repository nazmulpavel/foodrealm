import React from 'react'

import book from '../data.json'
import Card from './card'



export default function Booklist() {

console.log("11111111", book)
    
  return (
    <div >
        <h3 className="text-3xl text-center pt-10">Book list</h3>

        <div className= "grid grid-cols-4 gap-4">
        {
            book.map((book)=>{
                return(
                    <div className= "pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" key = {book.bookId}>
                        <Card book={book}></Card>
                    {/* <h3>book name:{book.bookName} </h3> */}
                    </div>
                )

            })
        }
        </div>
        
    </div>
  )
}
