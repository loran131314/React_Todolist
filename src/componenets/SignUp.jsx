import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import axios from "axios"

const { VITE_APP_HOST } = import.meta.env

function SignUp() {

  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const nevigate = useNavigate();

  const signUp = async () => {
    // console.log('signUp form:', userData);   // TEST
    if (!email || !nickname || !password) {
      Swal.fire('Failed!', 'Please rewrite the sign up information!');
      return;
    }
    if (password !== passwordCheck) {   // 確認密碼
      Swal.fire('Failed!', 'The first password is different from the second one!');
      return;
    }
    const userData = { email, nickname, password }
    setIsLoading(true);
    try {
      const res = await axios.post(`${VITE_APP_HOST}/users/sign_up`, userData);
      Swal.fire({
        title: 'Success!',
        text: 'You signed up! Please log in!',
        showConfirmButton: false,
        timer: 2000
      }).then(() => { setIsLoading(false); nevigate('/'); });
    } catch (err) {
      Swal.fire('Failed!', err.response.data.message);
      setIsLoading(false);
    }
  }

  return (
    <div>
      <form className="formControls" action="index.html">
        <h2 className="formControls_txt">註冊帳號</h2>
        <label className="formControls_label" htmlFor="email">Email</label>
        <input className="formControls_input" type="text" name="email" id="email" value={email}
          placeholder="請輸入 email" onChange={(e) => setEmail(e.target.value)} required />
        <label className="formControls_label" htmlFor="nickname">您的暱稱</label>
        <input className="formControls_input" type="text" name="nickname" id="nickname" value={nickname}
          placeholder="請輸入您的暱稱" onChange={(e) => setNickname(e.target.value)} />
        <label className="formControls_label" htmlFor="password">密碼</label>
        <input className="formControls_input" type="password" name="password" id="password" value={password}
          placeholder="請輸入密碼" onChange={(e) => setPassword(e.target.value)} required />
        <label className="formControls_label" htmlFor="passwordConfirm">再次輸入密碼</label>
        <input className="formControls_input" type="password" name="passwordConfirm" id="passwordConfirm" value={passwordCheck}
          placeholder="請再次輸入密碼" onChange={(e) => setPasswordCheck(e.target.value)} required />
        <input className="formControls_btnSubmit" type="button" disabled={isLoading} onClick={signUp} value="註冊帳號" />
        <NavLink className="formControls_btnLink" to="/">登入</NavLink>
      </form>
    </div>
  )

}

export default SignUp