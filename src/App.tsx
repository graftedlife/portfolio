import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import RightPanel from './components/RightPanel'
import Home from './pages/Home'
import About from './pages/About'
import Publications from './pages/Publications'
import Blog from './pages/Blog'
import Categories from './pages/Categories'

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <div className="flex-1 flex">
          <main className="flex-1 p-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/categories" element={<Categories />} />
            </Routes>
          </main>
          <RightPanel />
        </div>
      </div>
    </div>
  )
}