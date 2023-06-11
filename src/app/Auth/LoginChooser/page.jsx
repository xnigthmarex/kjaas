import React from 'react'
import Link from "next/link";

function LoginChooser() {
  return (
    <div >
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Choose an Option
              </h1>
              <div className= "space-y-4 md:space-y-6">
                <Link href = "/Auth/Login">
                <button
                  type="submit" href="http://localhost:3000/Auth/Login"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Existing User
                </button>
                </Link>
                <Link href = "/Auth/SignUp">
                <button
                  type="submit"  
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  New User
                </button>
                </Link>
                </div>
          
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LoginChooser