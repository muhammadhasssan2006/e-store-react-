import { useEffect, useState } from 'react'
import Appbar from './components/Appbar'
import './App.css'
import { colors } from '@mui/material'
import axios from 'axios'
import Cards from './components/card'



function App() {
  const [products,setproducts]=useState([])
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((res)=> setproducts(res.data))

  },[])
  console.log(products)

  return (
    <>
    <Appbar   bgcolor="#121212" />
    {/* <div>
      {
        products && products.map((e,i)=>{
          return(
            <h1>{e.title}</h1>
          )
        })
      }
    </div> */}
    <Cards />
    </>
  )
}

export default App
