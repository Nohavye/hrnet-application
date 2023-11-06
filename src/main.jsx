// React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Redux
import { Provider } from 'react-redux'
import store from './store'

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import CreateEmployee from './pages/createEmployee'
import EmployeeList from './pages/employeeList'

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
                        <Route path="/" element={<CreateEmployee />} />
                        <Route path="/employees" element={<EmployeeList />} />
                    </Routes>
                </PageWrapper>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
)
