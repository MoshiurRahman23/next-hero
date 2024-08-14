import React from 'react'

export default function page({ params }) {
    console.log(params.slug);
    const { title, description } = blogs.find((blog) => blog.slug == params.slug);
    return (
        <div className="h-screen">
            <h2>{title}</h2>
            <h2>{description}</h2>

        </div>
    )
}
const blogs = [
    {
        "slug": "ThisOne-2022",
        "title": "Blog example?",
        "description": "For example, a restauranteur could regularly blog about everything from their favorite farmers' markets, to amusing anecdotes, to the way they develop new recipes. A personal blog allows the reader to connect with the person behind the business, making them more likely to remember and patronize the restaurant.",
    },
    {
        "slug": "ThisOne-2023",
        "title": "What is example?",
        "description": "For example, a restauranteur could regularly blog about everything from their favorite farmers' markets, to amusing anecdotes, to the way they develop new recipes. A personal blog allows the reader to connect with the person behind the business, making them more likely to remember and patronize the restaurant.",
    },
    {
        "slug": "ThisOne-2024",
        "title": "What is a blog?",
        "description": "For example, a restauranteur could regularly blog about everything from their favorite farmers' markets, to amusing anecdotes, to the way they develop new recipes. A personal blog allows the reader to connect with the person behind the business, making them more likely to remember and patronize the restaurant.",
    },
    {
        "slug": "ThisOne-2025",
        "title": "What is a blog example?",
        "description": "For example, a restauranteur could regularly blog about everything from their favorite farmers' markets, to amusing anecdotes, to the way they develop new recipes. A personal blog allows the reader to connect with the person behind the business, making them more likely to remember and patronize the restaurant.",
    },
]