import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'

const GmailLayout = () => (
  <div className="d-flex flex-column vh-100">
    <Navbar />

    <div className="d-flex flex-fill">
      <div className="sidebar p-3 d-flex flex-column ">
        <a href="/gmail/inbox" className="p-2 text-decoration-none">
          inbox
        </a>
        <a href="/gmail/starred" className="p-2 text-decoration-none">
          starred
        </a>
      </div>

      <div className="content flex-fill">
        <Outlet />
      </div>

      <div className="toolbar"></div>
    </div>
  </div>
)

export default GmailLayout
