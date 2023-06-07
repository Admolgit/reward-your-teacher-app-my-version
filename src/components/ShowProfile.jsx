import React from 'react'
import axios from 'axios'

function ShowProfileModal(props) {
  
  const [user, setUser] = React.useState([])

  React.useEffect(() => {
    let data = axios.get(`${REACT_APP_BASE_UR}`)
  })

  return (
    <div>ShowProfile</div>
  )
}

export default ShowProfileModal;