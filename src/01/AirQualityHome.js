import { useState } from "react"


export default function AirQualityHomeOut() {
  const[isLogin, setIsLogin] = useState(false)

  const handleSignIn =() =>{
    setIsLogin(true)
  }


  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
      <section className="w-60 h-60 bg-slate-300">
        <div>
          <form>
            <div className="flex flex-col justify-center items-center m-5">
              id
              <div className="flex flex-col justify-center items-center">
              <input type="id" id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                pw
                <input type="password" id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
                <div className="flex flex-col m-5">
                <button className="bg-white inline-flex px-10 py-3 
                        rounded-md
                        justify-center items-center
                        text-black font-bold"
                        onClick={handleSignIn}>
                        Sign in
                </button>
                </div>
            </div>
          </form>
        </div>
        {isLogin && <AirQualityHomeOut/>}
      </section>
    </div>
  )
}
