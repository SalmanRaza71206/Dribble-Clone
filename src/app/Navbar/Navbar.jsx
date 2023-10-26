import React from 'react'
import Link from 'next/link';

function Navbar() {
  return (
    <>
     <nav className="p-8 flex justify-between items-center">
     <ul className="flex space-x-6">
        <li>
          <Link href="">
            <span className="">Find Talent</span>
          </Link>
        </li>
        <li>
          <Link href="">
            <span className="">Inspiration</span>
          </Link>
        </li>
        <li>
          <Link href="">
            <span className="">Learn Designs</span>
          </Link>
        </li>
        <li>
          <Link href="">
            <span className="">Jobs</span>
          </Link>
        </li>
        <li>
          <Link href="">
            <span className="">Go Pro</span>
          </Link>
        </li>
      </ul>
      <div className=''>
     
        <Link href="/">
          {/* <span className=" text-2xl font-bold">Dribble</span> */}
<img  className="w-24 ml-2" src="https://imgs.search.brave.com/fVZ8Uoh2vPpB6FTCGLwu7w1pudFUBPc0BqF5zb1AYR4/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9lL2UzL0Ry/aWJiYmxlX2xvZ28u/c3ZnLzUxMnB4LURy/aWJiYmxlX2xvZ28u/c3ZnLnBuZw" alt="" />
        </Link>
      </div>
     
      <ul className="flex space-x-6">
        <li>
          <Link href="/login">
            <span className="">Login</span>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <span className=" bg-black text-white p-3 rounded-full border font-semibold text-sm">Signup</span>
          </Link>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar
