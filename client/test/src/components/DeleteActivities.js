import React from 'react'

const DeleteActivities = ({ handleDeleteActivities}) => {
  return (
    <button id="danger-btn" onClick={() => handleDeleteActivities()}>Clear Activities</button>
  )
}

export default DeleteActivities