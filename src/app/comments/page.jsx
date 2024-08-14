import React from 'react'

const getComments = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json()
    return data;
}

export default async function Contact() {
    const commentsData = await getComments();
    // console.log(commentsData);
    return (
        <div>
            <h2>All Comments Here</h2>
            <div className='grid grid-cols-4 gap-5'>
                {
                    commentsData?.slice(0, 12).map(({ id, name, email, body }) =>
                        <div key={id} className='border-2 p-5'>
                            <h2 className='text-3xl'>Name: {name}</h2>
                            <h2 className='text-xl'>Email: {email}</h2>
                            <h2>Body: {body}</h2>
                        </div>)
                }
            </div>
        </div>
    )
}
