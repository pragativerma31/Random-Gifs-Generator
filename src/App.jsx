import RandomGifs from "./components/RandomGifs"
import TaggedGifs from "./components/TaggedGifs"

export default function App() {
  return (
    <div className ="flex flex-col items-center justify-evenly space-y-4 p-4 background h-[100vh] w-full ">
      <div className=" bg-white w-full h-[50px] rounded-[1rem] flex justify-center items-center text-2xl font-bold text-gray-800">
        <span>Random Gifs</span>
      </div>
      <div>
        <RandomGifs></RandomGifs>
      </div>
      <div>
        <TaggedGifs></TaggedGifs>
      </div>
    </div>
  )
}

