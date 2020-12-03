import React from 'react'
import IndividualActivity from './IndividualActivity'

const StoredActivities = ({ list }) => {
  return (
    list.map((activity, idx) => {
      return <IndividualActivity key={`${idx}-activity-${activity}`} info={activity}/>
    })
  )
}

export default StoredActivities