import React from 'react'

import book from '../data.json'
import Card from './card'



export default function Booklist() {

console.log("11111111", book)
    
  return (
    <div className= "pb-5" >
        <hr></hr>
        <h3 className="text-3xl text-center p-6">Book List</h3>
        <hr></hr>
        <div className= "container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
        {
            book.map((book)=>{
                return(
                    <div className= "pt-4 " key = {book.bookId}>
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
