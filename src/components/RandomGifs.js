import axios from 'axios';
import {useEffect, useState} from 'react';

const RandomGifs = () => {

  const [gifUrl , setgifUrl] = useState('');

  async function fetchdata() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=DeYtmqoYvIRo89dGIP7KJTwHDVQgw8T3c`;
    try {
      const {data} = await axios.get(url);
      setgifUrl(data.data.images.downsized_large.url);
    } 
    catch (error) {
      console.error(error);
    }
  }


  useEffect(() =>{
    fetchdata();
  },[])

  function generateRandomgif(){
    fetchdata();
  }

  return (
    <div className="bg-blue-400 w-[500px] h-[300px] flex flex-col justify-evenly items-center">
      <span className=" bg-white text-[20px] font-semibold w-[40%] flex justify-center items-center h-[35px] rounded-[0.5rem]">A Random Gif</span>
      <img src={gifUrl} alt="gifs" width={350}></img>
      <button onClick={generateRandomgif} className=" bg-[#98FF98]  text-[#001F3F] text-[20px] font-semibold w-[40%] flex justify-center items-center h-[35px] rounded-[0.5rem] ">Generate</button>
    </div>
  )
}

export default RandomGifs;
