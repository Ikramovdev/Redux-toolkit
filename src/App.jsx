import './App.css'
import Navbar from './components/Navbar'
import List from './components/List'
import { useState } from 'react'

function App() {
  const [products, setProducts] = useState([])
  const [refresh, setRefresh] = useState([])
  return (
    <>
      <Navbar products={products} setProducts={setProducts} refresh={refresh} setRefresh={setRefresh} />
      <List products={products} setProducts={setProducts} refresh={refresh} setRefresh={setRefresh} />
    </>
  )
}

export default App
