import Link from 'next/link';
import React from 'react'

const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data;
}
export default async function PostPage() {
    const postsData = await getPosts()
    // console.log(postsData);
    return (
        <div>
            <h2>All Posts Here</h2>
            <div className='grid grid-cols-4 gap-4'>
                {
                    postsData?.slice(0, 20).map(({ title, body, id }) =>
                        <div key={id} className='border-2 p-5'>
                            <h1 className='text-3xl'>Title: {title}</h1>
                            <h1>Body: {body}</h1>
                            <button className='bg-red-400 px-2 py-4 mt-3'><Link href={`/posts/${id}`}>Post Details</Link></button>
                        </div>)
                }
            </div>
        </div>
    )
}
