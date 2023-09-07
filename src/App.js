import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar'; // Import the Sidebar component

import projectData from './data/projectData';
import personalData from './data/personalData';
import './App.css'; // Don't forget to import your main CSS file
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'; // Import Router and Route

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [projects, setProjects] = useState(projectData);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Router>
      <section className="App">
        <Header toggleSidebar={toggleSidebar} />
        {isSidebarOpen && <Sidebar closeSidebar={closeSidebar} isSidebarOpen={isSidebarOpen} />}
        <main className={`content ${isSidebarOpen ? 'content-shifted' : ''}`}>
          <Routes>
            <Route path='/' exact element={
              <>
                <Home {...personalData} />
              </>
            } />
            <Route path='/projects' element={<Projects projects={projects} />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About {...personalData} />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </section>
    </Router>
  );
}

export default App;