// import React from 'react'
// import { toast } from "sonner"

function NavBar() {
  return (
    <div className='bg-gray-950 flex flex-col p-1 text-center'>
        <h3 className="text-lg text-gray-300 sm:text-xl md:text-3xl p-1 font-bold font-[math] select-none">Luminar Lectures</h3>
        {/* <button onClick={() => toast("Hello, World!")}>Test Toast</button> */}
        <div className='text-sm text-gray-600 bg-slate-500 flex flex-row justify-between p-1'>

            <p className="sm:w-1/3 lg:w-1/4 text-slate-200 font-semibold select-none">
            Purpose of this application:
            </p>

            <marquee className="text-slate-300" behavior="scroll" direction="left">
            This App Contains all the lectures of Luminar Technolab. You can view the lectures and also you can add your own lectures to this application.
            </marquee>
        </div>
    </div>
  )
}

export default NavBar
