import { Outlet } from 'react-router-dom'

function Auth() {

  return (
    <>
      <div className="bg-yellow">
        <div className="conatiner loginPage signUpPage vhContainer">
          <div className="side">
            <img className="logoImg" src="https://upload.cc/i1/2022/03/23/rhefZ3.png" alt="Logo" />
            <img className="d-m-n" src="https://upload.cc/i1/2022/03/23/tj3Bdk.png" alt="Work Image" />
          </div>
          <div>
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  )


}

export default Auth