import React, {useState} from "react"
import {signInWithEmailAndPassword} from "firebase/auth"
import {Link, useNavigate} from "react-router-dom"
import {auth} from "../firebase/configFirebase"
import {useDispatch} from "react-redux"
import {setUser} from "../redux/features/ecommerseSlice"
import {toast} from "react-toastify"

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      dispatch(setUser(userCredential.user))
      setLoading(false)
      navigate("/")
      toast.success("Logged in successfully")
    } catch (error) {
      toast.error(`Error signing in: ${error.message}`)
      setLoading(false)
    }
  }

  return (
    <div className="relative bg-base-100 flex flex-col justify-center min-h-screen overflow-hidden px-6">
      <div className="bg-base-100 p-6 m-auto rounded-md shadow-md max-w-[600px] w-full">
        <h1 className="text-center text-3xl font-bold">Log in</h1>
        <form className="mt-6" onSubmit={handleLogin}>
          <div className="mb-2">
            <label className="block text-sm font-semibold">Email</label>
            <input
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered input-md mt-2 mb-4 w-full max-w-full"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold">Password</label>
            <input
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered mt-2 input-md w-full max-w-full"
            />
          </div>

          <div className="mt-6">
            {loading ? (
              <button
                type="submit"
                className="w-full btn-disabled btn btn-active btn-neutral"
              >
                Log in <span className="loading loading-spinner"></span>
              </button>
            ) : (
              <button
                type="submit"
                className="w-full btn btn-active btn-neutral"
              >
                Log in
              </button>
            )}
          </div>
        </form>

        <p className="mt-8 text-xs font-light tracking-[1px] text-center">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-purple-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
