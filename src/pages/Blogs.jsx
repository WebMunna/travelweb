import BlogBox from "../components/BlogBox"

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Blogs = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease'
    });
  })

  return (
    <div data-aos='fade-left' className='blogs' id="blogs">
    <h1 className='blogs-title'>Our Blogs</h1>
   <div className='blog-boxes'>
       <BlogBox pic={"1"}/>
       <BlogBox pic={"2"}/>
       <BlogBox pic={"3"}/>
   </div>
</div>
  )
}

export default Blogs