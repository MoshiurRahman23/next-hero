import Link from 'next/link'
import React from 'react'

export default function BlogsPage() {
    return (
        <div className="p-24">
            {
                blogs.map((blog) => (
                    <div key={blog.slug} className="border-2 p-12">
                        <h3>{blog.title}</h3>
                        <h3>{blog.description}</h3>
                        <button className="bg-red-400 p-3">
                            <Link href={`/blogs/${blog.slug}`}>View Details</Link>
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

const blogs = [
    {
        "slug": "ThisOne-2022",
        "title": "What is a blog example?",
        "description": "For example, a restauranteur could regularly blog about everything from their favorite farmers' markets, to amusing anecdotes, to the way they develop new recipes. A personal blog allows the reader to connect with the person behind the business, making them more likely to remember and patronize the restaurant.",
    },
    {
        "slug": "ThisOne-2023",
        "title": "What is a blog example?",
        "description": "For example, a restauranteur could regularly blog about everything from their favorite farmers' markets, to amusing anecdotes, to the way they develop new recipes. A personal blog allows the reader to connect with the person behind the business, making them more likely to remember and patronize the restaurant.",
    },
    {
        "slug": "ThisOne-2024",
        "title": "What is a blog example?",
        "description": "For example, a restauranteur could regularly blog about everything from their favorite farmers' markets, to amusing anecdotes, to the way they develop new recipes. A personal blog allows the reader to connect with the person behind the business, making them more likely to remember and patronize the restaurant.",
    },
    {
        "slug": "ThisOne-2025",
        "title": "What is a blog example?",
        "description": "For example, a restauranteur could regularly blog about everything from their favorite farmers' markets, to amusing anecdotes, to the way they develop new recipes. A personal blog allows the reader to connect with the person behind the business, making them more likely to remember and patronize the restaurant.",
    },
]