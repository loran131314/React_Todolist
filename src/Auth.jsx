import { Outlet } from 'react-router-dom'

function Auth() {

  return (
    <>
      <div className="bg-yellow">
        <div className="conatiner loginPage signUpPage vhContainer">
          <div className="side">
            <img className="logoImg" src="/Logo.png" alt="Logo" />
            <img className="d-m-n" src="/Work.png" alt="Work Image" />
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
