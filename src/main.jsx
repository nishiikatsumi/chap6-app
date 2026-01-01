import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {posts} from './data/posts.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App posts={posts} />
  </StrictMode>,
)
