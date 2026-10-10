// import React from 'react'
import CommonModal from "./components/CommonModal"
import { useState } from "react"
import Card from "./components/Card";

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className='flex flex-col bg-green-50 justify-end items-center p-2'>
        <div className="w-full flex flex-col bg-green-50 justify-end items-end p-2">
            <div className="w-3/5 flex flex-row bg-gray-200 justify-between">
                    <h3 className="p-3 ms-7 text-xl lg:text-3xl">Welcome Suhail</h3>

                    <button className="text-black  font-semibold bg-blue-300 hover:bg-blue-400 hover:text-slate-800 px-2 py-1 rounded-md shadow-sm" onClick={() => setIsModalOpen(true)}>Open Modal</button>

            </div>
        </div>

          <Card
              image="https://picsum.photos/400/300"
              tag="React"
              title="Component Basics"
              description="Learn props, state and reusable components step by step."
              buttonText="View lecture"
              onClick={() => console.log("clicked")}
          />

                {/* Modal */}
      <CommonModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="My Modal"
      >
        <p>This is the modal content.</p>
      </CommonModal>
      
    </div>
  )
}

export default Home
