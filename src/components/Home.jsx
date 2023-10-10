// import { useEffect, useState } from 'react';
import useFetch from '../customhooks/useFetch'
import BlogList from './BlogList'

export default function Home() {
  //const url = 'http://localhost:8000/blogs'
  const url ='https://64f23a390e1e60602d24ebd9.mockapi.io/blogs/'
  const {data: blogs, isPending, error} = useFetch(url) //data is called as blogs
 
  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
     
    </div>
  )
}
