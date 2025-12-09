import './App.css'
import { TeamAnalytics } from './components/analytics/TeamAnalytics'
import { PredictionDashboard } from './components/dashboard/PredictionDashboard'
import { AboutPage } from './components/about/AboutPage'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  // const [selectedTeamAnalytics, setSelectedTeamAnalytics] = useState("Celtics")

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' />
      </Routes>

    </BrowserRouter>
  )
}

export default App
