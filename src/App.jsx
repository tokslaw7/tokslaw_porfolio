import './App.css'
import About from "./component/about/About";
import Home from "./component/home/Home";
import Blog from "./component/blog/Blog";
import Service from "./component/services/Service";
import Works, {worksData} from "./component/works/Works";
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import Project from "./component/project/Project";




function App() {
  return (
    <>
        <Navbar/>
        <Home/>
        <Works/>
        {/*<About/>*/}
        <Blog />
        <Service />
        <Project />
        <Footer />
    </>
  )
}

export default App

// <BrowserRouter>
//     <Routes>
//         <Route path="/" element={ <Home/>} />
//         <Route path="/blog" element={ <Blog />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/project" element={<Project />} />
//     </Routes>
// </BrowserRouter>