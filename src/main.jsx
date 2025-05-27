import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Store from './Components/Admin/redux/store/LoaderStore.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
  <StrictMode>
    <App />
  </StrictMode>
  </Provider>
)
