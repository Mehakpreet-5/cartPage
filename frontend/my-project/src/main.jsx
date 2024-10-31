import React , { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-ct62gt6wnoxmquem.us.auth0.com"
    clientId="HwB1lKN2yubB7tHh9KdNCOJymxe82XQl"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
 
  <StrictMode>
    <App />
  </StrictMode>,
  </Auth0Provider>,
)

