import React, { memo } from 'react'

import { Outlet } from './router'

import { HashRouter as Router } from 'react-router-dom'
import WSAppHeader from '@/components/app-header'
import WsAppFooter from '@/components/app-footer'

export default memo(function App() {
  return (
    <Router>
      <WSAppHeader />
      <Outlet />
      <WsAppFooter />
    </Router>
  )
})
