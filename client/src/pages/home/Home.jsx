import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("/post")
      setPosts(res.data)
    }
    fetchPosts()
  }, [])
  return (
    <>
    <Header/>
    <div className='home'>
      <Posts posts={posts}/>
      <Sidebar/>  
    </div>
    </> 
  )
}
