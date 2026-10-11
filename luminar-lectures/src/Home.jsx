// import React from 'react'
import CommonModal from "./components/CommonModal"
import { useState } from "react"
// import Card from "./components/Card";
import HoverCard from "./components/HoverCard";

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className='flex flex-col bg-green-50 justify-end items-center p-2'>
        <div className="w-full flex flex-col bg-green-50 justify-end items-end p-2">
            <div className="w-3/5 flex flex-row justify-between">
                    <h3 className="p-3 ms-7 text-xl lg:text-3xl">Welcome Suhail</h3>

                    <button className="text-black  font-semibold bg-blue-300 hover:bg-blue-400 hover:text-slate-800 px-2 py-1 rounded-md shadow-sm" onClick={() => setIsModalOpen(true)}>Open Modal</button>

            </div>
        </div>

          <div className="hc-grid">
              <HoverCard description="Some description" />

              <HoverCard
                  title="React Hooks"
                  description="useState, useEffect and custom hooks explained with examples."
                  onClick={() => console.log("open lecture")}
              />
          </div>

          {/* <Card
              image="https://picsum.photos/400/300"
              tag="React"
              title="Component Basics"
              description="Learn props, state and reusable components step by step."
              buttonText="View lecture"
              onClick={() => console.log("clicked")}
          /> */}

                {/* Modal */}
      <CommonModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Lecture"
      >
        <p>Fill in the details for the new lecture:</p>
        <div className="flex flex-col">
            <div className="flex flex-col gap-2 p-2">
            <input type="text" placeholder="Enter Lecture Url" />
            <input type="text" placeholder="Enter Lecture Title" />
            <input type="text" placeholder="Enter Description" />
            </div>
            <br />

            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
        </div>
      </CommonModal>
      
    </div>
  )
}

export default Home
