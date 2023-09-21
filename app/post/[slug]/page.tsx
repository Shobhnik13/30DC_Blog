import { Post } from "@/lib/interface";
import { client } from "@/lib/sanity"
import { urlFor } from "@/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getData(slug:string){
    const groqQuery=`*[_type == 'post' && slug.current == "${slug}"][0]`
    const data=await client.fetch(groqQuery)
    // console.log(data);
    return data;
}

const SlugPage=async({params}:{params:{slug:string}}) => {
    const data=(await getData(params.slug)) as Post
    // console.log(data)
    const PortableTextComponent ={
        types:{
             image: ({value}:{value:any})=>(
                <Image src={urlFor(value).url()} alt="image" className="rounded-lg" width={800} height={800}/>
             )   
        }
}
  return (
    <div className="flex flex-col justify-center items-center gap-y-6">
        {/* div1 -> upper  */}
        <div className="flex flex-col gap-y-2 justify-center items-center">
            <p className="text-gray-400 font-medium leading-6 text-lg">{new Date(data._createdAt).toISOString().split('T')[0]}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight capitalize font-bold text-transparent bg-clip-text  bg-gradient-to-r from-blue-500 via-blue-300 to-blue-200">{data.title}</h1>
        </div>
        {/* div2-> content  */}
        <div className="divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="text-center  prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400">
            <PortableText
              value={data.content}
              components={PortableTextComponent}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlugPage
