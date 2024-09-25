// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Homepage from './pages/Homepage'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <Homepage></Homepage>
    
//   )
// }

// export default App

import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/shared/Footer";


const App = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer/>
        </>
    );
};

export default App;