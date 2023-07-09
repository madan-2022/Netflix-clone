import React from 'react'
import './home.scss'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } 
from 'react'
import { Link } from 'react-router-dom'
import { BiPlay } from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"
const apiKey="4a12ffb4d2d38a1bd97a4fa8499991e4"


const upcoming="upcoming"
const nowPlaying="now_playing"
const toprated="top_rated"
const popular="popular"

const url="https://api.themoviedb.org/3"
const imgUrl="https://image.tmdb.org/t/p/original"


const Card=({img})=>(
  <div className='card'>
    <img src={img} alt='cover'/>

  </div>

)
  
  


const Row=({title,arr=[{img:"https://assets.gqindia.com/photos/640b0076294e6accaf6ff03b/1:1/w_1080,h_1080,c_limit/TJMM-ending-explainer_05.jpg"}]})=>(
  
  
  <div className='Row'>
    
  <h2>{title}</h2>

  <div>
    {
      arr.map((items,index)=>(
        <Card key={index} img={`${imgUrl}/${items.poster_path}`}/>

      ))
        
    

    }
    





  </div>


  </div>


  
)
  
  
  
  

  




const Home = () => {

  const [upcomingMovie,setUpcomingMovie]=useState([])
  const [popularMovie,setPopularMovie]=useState([])
  const [topRated,setTopRated]=useState([])
  const [nowplayingMovies,setNowplayingMovies]=useState([])
  const [ Genre,setGenre]=useState([])


  useEffect(()=>{

    const fetchNowplaying=async()=>{
      const {data:{results}}=await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`)
      setNowplayingMovies(results)
      
    };
    const fetchUpcoming=async()=>{
      const {data:{results}}=await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)
      setUpcomingMovie(results)
      
    };

    const fetchPopular=async()=>{
      const {data:{results}}=await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`)
      
      setPopularMovie(results)
      
    };
    const fetchTopratedMovies=async()=>{
      const {data:{results}}=await axios.get(`${url}/movie/${toprated}?api_key=${apiKey}`)
      
      setTopRated(results)
      
    };
    const getallgenre=async()=>{
      const {data:{genres}}=await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`)
      console.log(genres)
      
      setGenre(genres)
      
    };
    fetchUpcoming();
    fetchPopular();
    fetchTopratedMovies();
    fetchNowplaying();
    getallgenre();

  },[])

  return (
    <section className='Home'>
      <div className='banner' style={{backgroundImage:popularMovie[0]?`url(${`${imgUrl}/${popularMovie[0].poster_path}`})`:"rgb(16,16,16)"}}>

        {
          popularMovie[0] &&(
            <h1>{popularMovie[0].original_title}</h1>

          )
        }
        {
          popularMovie[0] &&(
            <p>{popularMovie[0].overview}</p>

          )

        }

        <button><BiPlay/> Play </button>
        <button>My List <AiOutlinePlus/></button>
        </div>
      <Row  title={"Now Playing"} arr={nowplayingMovies}/>

      <Row  title={"Upcoming movies"} arr={upcomingMovie}/>
      <Row  title={"popular on netflix"}arr={popularMovie}/>
      <Row  title={"Top rated movies"}arr={topRated}/>

      <div className="genremap">
        <h2>Genre</h2>
        <div>
        {
          Genre.map((item)=>(
            <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>

          ))
        }

        </div>
      </div>
    </section>
  )
}

export default Home