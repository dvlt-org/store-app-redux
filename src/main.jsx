import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './context/store.js'
import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)