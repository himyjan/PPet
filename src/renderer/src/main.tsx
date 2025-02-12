import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './utils/ga'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <>
  {/* <StrictMode> */}
    <HashRouter>
      <App />
    </HashRouter>
  {/* </StrictMode> */}
  </>
)
