import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./component/home/Home";
import Blog from "./component/blog/Blog";
import About from "./component/about/About";
import Service from "./component/services/Service";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>
)
