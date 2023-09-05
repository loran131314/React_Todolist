import { HashRouter, NavLink, Routes, Route } from 'react-router-dom'
import LogIn from './componenets/LogIn'
import SignUp from './componenets/SignUp'
import TodoList from './componenets/TodoList'
import Auth from './Auth'
import NotFound from './NotFound'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Auth />}>
            <Route path='' element={<LogIn />}></Route>
            <Route path='/signUp' element={<SignUp />}></Route>
          </Route>
          <Route path='/todoList' element={<TodoList />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </HashRouter>
    </>
  )


}

export default App