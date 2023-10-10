import { Outlet, Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
    <div className='navbar'>
      <h1>Simple Blog</h1>
      <div className='links'>
      {/* <Link> is used to set the URL and keep track of browsing history. */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/create">New Blog</Link>
      </div>
      
    </div>
    <Outlet/>
      {/* The <Outlet> renders the current route selected. */}
      </>
  )
}
