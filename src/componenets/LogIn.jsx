import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import axios from "axios"

const { VITE_APP_HOST } = import.meta.env

function LogIn() {

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })
  const [isLoading, setIsLoading] = useState(false);    // 載入狀態
  const nevigate = useNavigate();

  const handelInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }

  // console.log(userData)
  // console.log(userData.email)

  const logIn = () => {
    (async () => {
      // console.log('logIn form:', userData);    // TEST
      if (!userData.email || !userData.password) {
        Swal.fire('Failed!', 'Please rewrite the sign up information!');
        return;
      }
      setIsLoading(true)
      try {
        const res = await axios.post(`${VITE_APP_HOST}/users/sign_in`, userData)
        // console.log(res);    // TEST
        const { data } = await res;
        // console.log(token);    // TEST

        document.cookie = `token=${data.token}; SameSite=None; Secure`    // 把用戶的 token 存入 web cookie

        Swal.fire({
          title: 'Success!',
          text: 'You logged in!  Please wait!',
          showConfirmButton: false,
          timer: 1500
        }).then(() => { setIsLoading(false); nevigate('/todoList'); })
      } catch (err) {
        console.log(err);
        Swal.fire('Failed!', err.response.data.message);
        setIsLoading(false);
      }
    })()
  }

  return (
    <div>
      <form className="formControls" action="index.html">
        <h2 className="formControls_txt">最實用的線上代辦事項服務</h2>
        <label className="formControls_label" htmlFor="email">Email</label>
        <input className="formControls_input" type="text" id="email" name="email" placeholder="請輸入 email" onChange={handelInput} required />
        <span>此欄位不可留空</span>
        <label className="formControls_label" htmlFor="password">密碼</label>
        <input className="formControls_input" type="password" name="password" id="password" placeholder="請輸入密碼" onChange={handelInput} required />
        <input className="formControls_btnSubmit" type="button" onClick={logIn} disabled={isLoading /* 避免用戶重複點擊 */} value="登入" />
        <NavLink className="formControls_btnLink" to="/signUp">註冊帳號</NavLink>
      </form>
    </div>
  )

}

export default LogIn