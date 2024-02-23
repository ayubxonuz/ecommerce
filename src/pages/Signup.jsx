import React, {useEffect} from "react"
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth"
import {Link, useNavigate} from "react-router-dom"
import {auth} from "../firebase/configFirebase"

const GoogleProvider = new GoogleAuthProvider()

function Signup() {
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/")
      }
    })

    return unsubscribe
  }, [navigate])

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, GoogleProvider)
      console.log("User signed in:", result.user)
    } catch (error) {
      console.error("Error signing in with Google:", error)
    }
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md md:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Sign up
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Name
            </label>
            <input
              required
              type="text"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />

            <label className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              required
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              required
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button className=" w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Enter
            </button>
            <br />
            <br />
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Sign up with Google
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
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
