import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../customhooks/useFetch'

export default function BlogDetails() {
    const {id} = useParams()
    // const url = 'http://localhost:8000/blogs/' + id;
    const url = 'https://64f23a390e1e60602d24ebd9.mockapi.io/blogs/'+id;
    const {data: blog, error, isPending} = useFetch(url) 
    const navigate = useNavigate()

    const deleteBlog = () => {
      // const url = 'http://localhost:8000/blogs/' + blog.id;
      const url = 'https://64f23a390e1e60602d24ebd9.mockapi.io/blogs/'+ blog.id;
      fetch(url, {
        method: "DELETE",
      })
      .then(() => {
        navigate('/')
      })
    }
  return (
    <div className='blog-details'>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blog && (
            <article key={id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div className='description'>{blog.description}</div>
                <button 
                  onClick={deleteBlog}
                  className='blog-details-button'
                  >Delete</button>
            </article>
        )}
    </div>
  )
}
