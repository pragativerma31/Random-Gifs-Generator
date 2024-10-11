import React from 'react'

const TaggedGifs = () => {
  return (
    <div className="bg-blue-400 w-[500px] h-[300px] flex flex-col justify-evenly items-center">
      <span className=" bg-white text-[20px] font-semibold w-[40%] flex justify-center items-center h-[35px] rounded-[0.5rem]">A Random Gif</span>
      <img alt="gifs"></img>
      <input type='text' placeholder="  Enter a Gif Tag" className=" bg-white text-[20px] font-semibold w-[70%] flex justify-center items-center h-[35px] rounded-[0.5rem]"></input>
      <button className=" bg-[#98FF98]  text-[#001F3F]  text-[20px] font-semibold w-[40%] flex justify-center items-center h-[35px] rounded-[0.5rem]">Generate</button>
    </div>
  )
}

export default TaggedGifs
