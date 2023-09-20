import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Post } from "@/lib/interface";
import { client } from "@/lib/sanity";
import { Zap } from "lucide-react";
import Link from "next/link";

 async function getData(){
  //query used will be *[type == 'post']
  const groqQuery=`*[_type == "post"]`;
  const data=await client.fetch(groqQuery)
  //now data is fetched through client
  //return 
  // console.log(data)
  return data;
}
export default async function Home() {
  const data=(await getData()) as Post[]
  // console.log(data)
  return (
   <div className='flex flex-col'>
    {/* heading div  */}
    <div className="flex gap-2 items-center justify-center ">
        <div className="tracking-tight text-2xl/snug sm:text-4xl/snug lg:text-5xl/snugfont-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 font-bold">
        Read out our Top Blogs 
        </div>
        <Zap className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 mt-2 w-6 h-6 sm:w-8 sm:h-8" fill="gray" />
    </div>
    {/* post div  */}
    <ul className="pt-8 ">
      {data.map((post)=>(
      <Card key={post._id} className="flex mb-4 p-6 justify-between items-center bg-teal-900/30">
        <div className="w-[45%]">
          <p className=" font-medium text-gray-400 text-base leading-6">{new Date(post._createdAt).toISOString().split('T')[0]}</p>
        </div>
        {/* <Link href={}> */}
        <div className="w-[55%]">
          <div className=" gap-y-2 flex flex-col justify-center  ">
              <h3 className=" text-2xl font-bold leading-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-300 to-blue-200">{post.title}</h3>
              <p className="text-base font-semibold prose line-clamp-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400">{post.overview}</p>
              
          </div>
        </div>
        {/* </Link> */}
      </Card>
      ))}
    </ul>
   </div>
  )
}
