// import React from 'react'
import CommonModal from "./components/CommonModal"
import { useState, useEffect, useCallback } from "react"
// import Card from "./components/Card";
import HoverCard from "./components/HoverCard";
import { base_Url } from "./services/base_Url";
import commonAPI from "./services/commonAPI";
import { addLecture, getLectures } from "./services/allAPIs";
import { toast }  from "sonner";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lectureData, setLectureData] = useState({
    title: "",
    description: "",
    url: ""
  });
  const [lectures, setLectures] = useState([]);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleLectureSubmit = async (e) => {
  e.preventDefault();

  if (!isValidYouTubeUrl(lectureData.url)) {
    toast.error("Please enter a valid YouTube video URL");
    return;
  }

  const response = await addLecture(lectureData);
  console.log(response);
};

  const handleWatchLecture = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const isValidYouTubeUrl = (url) => {
  try {
    const parsedUrl = new URL(url);

    const isYouTube =
      ["youtube.com", "www.youtube.com", "m.youtube.com"].includes(parsedUrl.hostname) ||
      parsedUrl.hostname === "youtu.be";

    const videoId = parsedUrl.hostname === "youtu.be"
      ? parsedUrl.pathname.slice(1)
      : parsedUrl.searchParams.get("v");

    return isYouTube && /^[\w-]{11}$/.test(videoId || "");
  } catch {
    return false;
  }
};



  useEffect(() => {
    const getUsers = async () => {
      const data = await commonAPI("GET", `${base_Url}/users`, null);
      console.log(data, "userssss");
    };

    const getLecturesData = async () => {
      const data = await getLectures();
      setLectures(data.data);
      console.log(data, "lectures");
    }

    getUsers();
    getLecturesData();
  }, []);

  console.log(lectures, "State lectures");
  console.log(lectureData, "lectureData");
  return (
    <div className='flex flex-col justify-end items-center p-2'>
      <div className="w-full flex flex-col  justify-end items-end p-2">
        <div className="w-3/5 flex flex-row justify-between">
          <h3 className="p-3 ms-7 text-xl lg:text-3xl font-[fangsong]">Welcome Suhail</h3>

          <button className="text-black  font-semibold bg-blue-300 hover:bg-blue-400 hover:text-slate-800 px-2 py-1 rounded-md shadow-sm" onClick={() => setIsModalOpen(true)}>Open Modal</button>

        </div>
      </div>

      {/* <p className="font-[monospace]">Font Style</p>
      <p className="font-[cursive]">Font Style</p>
      <p className="font-[serif]">Font Style</p>
      <p className="font-[sans-serif]">Font Style</p>
      <p className="font-[fantasy]">Font Style</p>
      <p className="font-[math]">Font Style Math</p>
      <p className="font-[system-ui]">Font Style</p>
      <p className="font-[ui-serif]">Font Style</p>
      <p className="font-[ui-monospace]">Font Style</p>
      <p className="font-[ui-sans-serif]">Font Style</p>
      <p className="font-[ui-rounded]">Font Style</p>
      <p className="font-[fangsong]">Font Style</p>
      <p className="font-[ui-sans-serif]">Font Style</p> */}

      <div className="hc-grid">
        <HoverCard description="Some description" />

        {/* <HoverCard
          title="React Hooks"
          description="useState, useEffect and custom hooks explained with examples."
          onClick={() => console.log("open lecture")}
        /> */}
        {lectures.map((lecture) => (
          <HoverCard
            key={lecture.id}
            title={lecture.title}
            description={lecture.description}
            onClick={()=>handleWatchLecture(lecture.url)}
          />
        ))}
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
        onClose={handleCloseModal}
        title="Add New Lecture"
      >
        <p>Fill in the details for the new lecture:</p>
        <div className="flex flex-col">
          <div className="flex flex-col gap-2 p-2">
            <input type="text" placeholder="Enter Lecture Url"
              value={lectureData.url}
              onChange={(e) =>
                setLectureData((prev) =>
                ({
                  ...prev, url: e.target.value
                }))
              }
            />
            <input type="text" placeholder="Enter Lecture Title"
              value={lectureData.title}
              onChange={(e) =>
                setLectureData((prev) => ({
                  ...prev,
                  title: e.target.value
                }))
              }
            />
            <input type="text" placeholder="Enter Description"
              value={lectureData.description}
              onChange={(e) =>
                setLectureData((prev) => ({
                  ...prev, description: e.target.value
                }))}
            />
          </div>
          <br />

          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleLectureSubmit}
          >Submit</button>
        </div>
      </CommonModal>

    </div>
  )
}

export default Home
