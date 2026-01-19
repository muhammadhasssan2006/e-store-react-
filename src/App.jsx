import { useEffect, useState } from 'react'
import Appbar from './components/Appbar'
import './App.css'
import { colors } from '@mui/material'
import axios from 'axios'
import Cards from './components/card'
import Footer from './components/footer'



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
      <h1 style={{fontFamily:"monospace",fontSize:35,margin:10,marginLeft:30}}>Products:</h1>
    <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap", gap:15}}>
      
      {
        products && products.map((e,i)=>{
          return(
            // <h1>{e.title}</h1>
            <Cards image={e.image}  title={e.title } desc={e.description}/>
          )
        })
      }
    </div>
    <Footer/>
    </>
  )
}

export default App
