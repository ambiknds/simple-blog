import React, { useState } from 'react'
// useState is a React Hook that lets you add a state variable to your component.
import { useNavigate } from 'react-router-dom'
// The useNavigate hook returns a function that lets you navigate programmatically, for example in an effect.
import dotenv from 'dotenv'

export default function Create() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [author, setAuthor] = useState('Select Author')
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = {title, description, author}
    // console.log(blog);
    setIsPending(true)
    // const url = 'http://localhost:8000/blogs'
    const url = 'https://64f23a390e1e60602d24ebd9.mockapi.io/blogs/' 
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
    })
    .then(() => {
      console.log('New Blog Added.');
      alert('New Blog Added.')
      setIsPending(false)
      navigate('/')
    })
  }
  return (
    <div className='create'>
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog Title:</label>
          <input 
            type='text'
            required
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
          <label>Blog Description:</label>
          <textarea 
            required
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          ></textarea>
          <label>Blog Author:</label>
          <select
            value={author}
            required
            onChange={(e)=>setAuthor(e.target.value)}
          >
            <option value='John'>John</option>
            <option value='W3 School'>W3 School</option>
            <option value='Kesan'>Kesan</option>
          </select>
          {!isPending && <button>Add Blog</button>}
          {isPending && <button disabled>Adding Blog!</button>}
          {/* <p>{title}</p><p>{description}</p><p>{author}</p> */}
        </form>
    </div>
  )
}
