import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/NavBar/nav'
import Analytics from './pages/Analytics'
import Create from './pages/create'

function App() {
  return (
    <>
      <Nav></Nav>
      <main className="mx-auto pt-[9vh] min-h-[91vh] max-w-6xl overflow-y-auto hide-scrollbar ">
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/create" element={<Create />} ></Route>
          {/* <Route path="/redirect" element={<Redirect />} ></Route> */}
          <Route path="/analytics" element={<Analytics />} ></Route>
        </Routes>
      </main>
    </>
  )
}

export default App
