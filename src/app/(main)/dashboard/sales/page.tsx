import DashboardWrapper from '@/components/hoc/DashboardWrapper'
import React from 'react'

const page = () => {
  return (
    <div>analytics</div>
  )
}

export default DashboardWrapper(page,["Dashboard","Sales"],"Track your Sales")