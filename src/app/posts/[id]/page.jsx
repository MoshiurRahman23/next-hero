import React from 'react'

const getDetailsPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data;
}

export default async function PostDetailPage({ params }) {
    const { title, body } = await getDetailsPost(params.id);
    return (
        <div>
            <h1>Title : {title}</h1>
            <h1>Description : {body}</h1>
        </div>
    )
}
