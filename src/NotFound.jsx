import { useNavigate } from "react-router-dom"

const NotFound = () => {

  const nevigate = useNavigate()
  
  const pageUp = () => {
    nevigate('/');
  }

  return (<>

    <div className="bg-yellow">
      <div className="conatiner loginPage signUpPage vhContainer">
        <div className="side">
          <img className="logoImg" src="https://upload.cc/i1/2022/03/23/rhefZ3.png" alt="Logo" />
          <img className="d-m-n" src="https://upload.cc/i1/2022/03/23/tj3Bdk.png" alt="Work Image" />
        </div>
        <div className="formControls">
          <p className="formControls_txt notFound_404">404</p><br /><br />
          <p className="formControls_txt notFound_txt">YOU DID NOT<br /><br />FOUND THE PAGE</p><br /><br /><br /><br />
          <input className="formControls_btnSubmit" type="button" value="返回首頁" onClick={pageUp} />
        </div>
      </div>
    </div>
  </>)

}
export default NotFound