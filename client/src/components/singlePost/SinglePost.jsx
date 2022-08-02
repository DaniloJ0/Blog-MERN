import { useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split("/")[2]
  const [singlePost, setSinglePost] = useState({});

  useEffect(()=>{
    const getPost = async ()=>{
        const res = await axios.get('/post/'+path)
        setSinglePost(res.data)
    }
    getPost()
  },[path])
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {postMessage.photo && (
            <img
            src={singlePost.photo}
            alt=""
            className="singlePostImg"
            />
        )}
        <h1 className="singlePostTitle">
          {singlePost.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>{singlePost.username}</b>
          </span>
          <span className="singlePostDate">{new Date(singlePost.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {singlePost.desc}
        </p>
      </div>
    </div>
  );
}
