import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Footer from '../shared/Footer'
import BookDetails from './BookDetails'
import Booklist from './Booklist'

export default function Homepage() {
  return (
    <>
    <Banner></Banner>

    <Booklist></Booklist>
    {/* <BookDetails></BookDetails> */}
    {/* <Footer></Footer> */}
    </>
)
}
