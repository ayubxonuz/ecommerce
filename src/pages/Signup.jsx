import React, {useState} from "react"
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth"
import {Link, useNavigate} from "react-router-dom"
import {auth} from "../firebase/configFirebase"
import {useDispatch} from "react-redux"
import {setUser} from "../redux/features/ecommerseSlice"
import {toast} from "react-toastify"

const GoogleProvider = new GoogleAuthProvider()

function Signup() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [loadingGoggle, setLoadingGoggle] = useState(false)
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      setLoading(false)
      dispatch(setUser(userCredential.user))
      navigate("/")
      toast.success("Successfully registered")
    } catch (error) {
      setLoading(false)
      toast.error(`Error signing up: ${error.message}`)
    }
  }

  const handleGoogleSignup = async () => {
    try {
      setLoadingGoggle(true)
      const result = await signInWithPopup(auth, GoogleProvider)
      dispatch(setUser(result.user))
      setLoadingGoggle(false)
      navigate("/")
      toast.success("Successfully registered")
    } catch (error) {
      toast.error(`Error signing up with Google: ${error.message}`)
      setLoadingGoggle(false)
    }
  }

  return (
    <div className="relative bg-base-100 flex flex-col justify-center min-h-screen overflow-hidden px-6">
      <div className="bg-base-100 p-6 m-auto rounded-md shadow-md max-w-[600px] w-full">
        <h1 className="text-center text-3xl font-bold">Sign up</h1>
        <form className="mt-6" onSubmit={handleSignup}>
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
                Sign up <span className="loading loading-spinner"></span>
              </button>
            ) : (
              <button
                type="submit"
                className="w-full btn btn-active btn-neutral"
              >
                Sign up
              </button>
            )}
          </div>
        </form>

        <div className="mt-6">
          {loadingGoggle ? (
            <button
              type="button"
              onClick={handleGoogleSignup}
              className="w-full btn btn-active btn-disabled btn-neutral"
            >
              Sign up with Google{" "}
              <span className="loading loading-spinner"></span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleGoogleSignup}
              className="w-full btn btn-active btn-neutral"
            >
              Sign up with Google
            </button>
          )}
        </div>

        <p className="mt-8 text-xs font-light tracking-[1px] text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-purple-600 hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
