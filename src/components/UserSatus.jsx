import React from 'react'

const UserSatus = ({isLogin, isAdmin}) => {
  return (
    <div>
        {isLogin && isAdmin && <h2>Welcome Admin</h2>}
        {isLogin === true && isAdmin === false  && <h2>Welcome User</h2>}
    </div>
  )
}

export default UserSatus