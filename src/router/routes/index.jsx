import React, { Suspense } from 'react'

const WSDiscover = React.lazy((_) => import('@/pages/discover'))

const WSFriend = React.lazy((_) => import('@/pages/friend'))
const WSMine = React.lazy((_) => import('@/pages/mine'))

const routes = [
  {
    path: '/',
    exact: true,
    element: (
      <Suspense>
        <WSDiscover />
      </Suspense>
    )
  },

  {
    path: '/mine',
    element: (
      <Suspense>
        <WSMine />
      </Suspense>
    )
  },

  {
    path: '/friend',
    element: (
      <Suspense>
        <WSFriend />
      </Suspense>
    )
  }
]

export default routes
