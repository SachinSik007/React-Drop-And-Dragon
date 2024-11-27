import React, { useRef } from 'react'
import Card from './Card'



const ForeGround = () => {

  const ref = useRef(null)

  const data = [
    {
      desc: "Lorem Ipsum dolor paid in the rupess for services.",
      filesize:".9mb",
      close: true,
      tag: {isOpen: true, tagTittle: "Download Now", tagColor: "greeen"},
    },
    {
      desc: "Lorem Ipsum dolor paid in the rupess for services.",
      filesize:".9mb",
      close: true,
      tag: {isOpen: true, tagTittle: "Download Now", tagColor: "blue"},
    },
    {
      desc: "Lorem Ipsum dolor paid in the rupess for services.",
      filesize:".9mb",
      close: true,
      tag: {isOpen: false, tagTittle: "Upload", tagColor: "greeen"},
    },
  ];

  return (
    <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap py-5">
      {data.map((item, index)=>(
        <Card data={item} key={index} refrence={ref}/>
      ))}
    </div>
  )
}

export default ForeGround