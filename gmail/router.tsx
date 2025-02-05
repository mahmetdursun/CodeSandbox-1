import React from 'react'
import { RouteObject } from 'react-router-dom'
import Error from '../public/pages/error'
import GmailLayout from './layout'
import Inbox from './pages/inbox'
import Starred from './pages/starred'

const GmailRouters: RouteObject = {
  path: '/gmail',
  element: <GmailLayout />,
  errorElement: <Error />,
  children: [
    {
      path: 'inbox',
      element: <Inbox />,
    },
    {
      path: 'starred',
      element: <Starred />,
    },
  ],
}

export default GmailRouters
