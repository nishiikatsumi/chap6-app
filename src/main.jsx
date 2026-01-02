import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'

import { DataProvider } from './utils/DataContext.jsx';
import {posts} from './data/posts.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <DataProvider products={posts}>
        <App />
      </DataProvider>
	  </BrowserRouter>
  </StrictMode>
);
