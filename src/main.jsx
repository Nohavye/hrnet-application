// React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Redux
import { Provider } from 'react-redux'
import store from './store'

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/home'
import Employees from './pages/employees'

// Components
import Header from './components/Header'
import PageWrapper from './components/PageWrapper'

// Globals styles
import './global/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <Header />
                <PageWrapper>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/employees" element={<Employees />} />
                    </Routes>
                </PageWrapper>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
)
