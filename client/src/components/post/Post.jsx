import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img 
          className="postImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=450"
          alt="" />
          <div className="postInfo">
            <div className="postCats">
               <span className="postCat">Music</span>
               <span className="postCat">life</span>
            </div>
            <span className="postTitle">
              Lorem ipsum dolor sit amet 
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
          </div>
          <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Molestias autem totam dignissimos! Fugit ab iste rerum 
             commodi omnis eaque, consectetur laudantium ut, amet,
             natus consequatur. Harum, qui aliquam. Saepe, consequatur!</p>  
    </div>
  )
}
