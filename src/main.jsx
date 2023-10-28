import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'
import store from './store'

// Pages
import Home from './pages/home'
import Employees from './pages/employees'

// Components
import Header from './components/header'
import PageWrapper from './components/pageWrapper'

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
