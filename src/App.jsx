import React from 'react'
import './App.css'
import five_stars_img from './assets/images/illustration-five-stars.webp'
import mul_platforms_img from './assets/images/illustration-multiple-platforms.webp';
import consistent_img from './assets/images/illustration-consistent-schedule.webp';
import posts_img from './assets/images/illustration-schedule-posts.webp';
import followers_img from './assets/images/illustration-grow-followers.webp';
import audience_img from './assets/images/illustration-audience-growth.webp';
import create_post_img from './assets/images/illustration-create-post.webp';
import ai_content_img from './assets/images/illustration-ai-content.webp';
const App = () => {
  return (
    <div className="grid-section">
      <div className='grid-container'>
        <div className="item1">
          <div className="nested-item1 item">
            <p className='medium-text'>Create and schedule content <span>quicker.</span></p>
            <img src={create_post_img} alt="" />

          </div>
          <div className="nested-item2 item">
            <p className='medium-text'>Write your content using AI.</p>
            <img src={ai_content_img} alt="" />
          </div>
        </div>

        <div className="item item2">
          <p className='item2-title'>Social Media <span>10x</span><i> Faster </i> with AI</p>
          <div className='item2-stars'>
            <img src={five_stars_img} alt="" />
            <small>Over 4,000 5-star reviews</small>
          </div>

        </div>
        <div className="item item3">

          <p className='small-text'> Schedule to social media.</p>
          <img src={posts_img} alt="" />
          <p className='item3-smallpara'>Optimize post timings to publish content at the perfect time for your audience.</p>

        </div>

        <div className="item item4">

          <img src={mul_platforms_img} alt="" />
          <p className='small-text'> Manage multiple accounts and platforms.</p>

        </div>
        <div className="item item5">

          <p className='small-text'>Maintain a consistent posting schedule.</p>
          <img src={consistent_img} alt="" />

        </div>
        <div className="item item6">

          <p> <span>{'>'}56%</span>faster audience growth</p>
          <img src={audience_img} alt="" />
        </div>
        <div className="item item7">
          <img src={followers_img} alt="" />
          <p className='medium-text'> Grow followers with non-stop content.</p>
        </div>

      </div>
    </div>

  )
}

export default App
