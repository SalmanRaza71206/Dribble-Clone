import React from 'react'
import Link from 'next/link';
function Card() {
  return (
    <div>
      <div className='max-w-5xl'>
      <div className="p-8 flex justify-between items-center">
     <ul className="flex space-x-6">
     <div className=''>
     
     <Link href="/">
  
<img  className="w-24 ml-2" src="https://imgs.search.brave.com/fVZ8Uoh2vPpB6FTCGLwu7w1pudFUBPc0BqF5zb1AYR4/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9lL2UzL0Ry/aWJiYmxlX2xvZ28u/c3ZnLzUxMnB4LURy/aWJiYmxlX2xvZ28u/c3ZnLnBuZw" alt="" />
     </Link>
   </div>
        <li>
          <Link href="">
            <span className="">Emotions</span>
          </Link>
        </li>
        <li>
          <Link href="">
            <span className="">Manifesto</span>
          </Link>
        </li>
        <li>
          <Link href="">
            <span className="">Self Awareness</span>
          </Link>
        </li>
        
      </ul>
     
     
      <ul className="">
        <li>
          <Link href="">
            <span className=" bg-black text-white p-3 rounded-full border font-semibold text-sm">Download</span>
          </Link>
        </li>
      </ul>
    </div>
    <div className='max-w-5xl'><img src="https://cdn.dribbble.com/userupload/10806562/file/original-71d3eb901785e1cfd885b3ae7a5a70b7.png?resize=1200x900" alt="" srcset="" /></div>
      </div>
    </div>
  )
}

export default Card
