import { useState } from "react";
import auht from '.././'

export default function LoginhtmlForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const signup = (email: any, password: any) => {
    auth
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if(password !== confirm) {
      alert('Password doesnt match!!!')
    }

    try {
      setError('')
      await 
      
    } catch (error) {
      
    }
    
  }
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-0 sm:p-12">
        <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
          <h1 className="text-2xl font-bold mb-8">
            Fill in form to get extra cool stuff
          </h1>
          <form id="form" onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="name"
                placeholder="Enter a name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
       
              <span className="text-sm text-red-600 hidden" id="error">
                Name is required
              </span>
            </div>

            <div className="relative z-0 w-full mb-5">
              <input
                type="email"
                name="email"
                placeholder="Enter an email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <span className="text-sm text-red-600 hidden" id="error">
                Email address is required
              </span>
            </div>

            <div className="relative z-0 w-full mb-5">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword( e.target.value)}
                placeholder="Enter a password"
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
     
              <span className="text-sm text-red-600 hidden" id="error">
                Password is required
              </span>
            </div>

            <div className="relative z-0 w-full mb-5">
              <input
                type="password"
                name="passwordConfirm"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="Confirm your password"
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />

              <span className="text-sm text-red-600 hidden" id="error">
                Password is required
              </span>
            </div>

            <button
              id="button"
              // onClick={dispatch(fetchTest)}
              type="submit"
              className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-green-500 hover:bg-green-600 hover:shadow-lg focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
