import { client } from "@/lib/sanity";

const getData=async()=>{
  //query used will be *[type == 'post']
  const groqQuery='*[_type == "post"]';
  const data=await client.fetch(groqQuery)
  //now data is fetched through client
  //return 
  return data;
}
export default async function Home() {
  const data=await getData()
  return (
   <div className=''>hi</div>
  )
}
