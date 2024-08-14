"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

export default function Navbar() {

    const pathName = usePathname();
    const router = useRouter();
    const links = [
        {
            title: "Home",
            path: '/home'
        },
        {
            title: "About",
            path: '/about'
        },
        {
            title: "Posts",
            path: '/posts'
        },
        {
            title: "Services",
            path: '/services'
        },
        {
            title: "Comments",
            path: '/comments'
        },
        {
            title: "Blogs",
            path: '/blogs'
        },
        {
            title: "Categories",
            path: '/categories'
        },
        {
            title: "Dashboards",
            path: '/dashboard'
        },
    ]

    const handle = () => {
        router.push('/login')
    }
    return (
        <nav className='bg-red-500 text-white px-6 py-4 flex justify-between items-center'>
            <h6 className='text-3xl'>Next <span className='text-cyan-500'>Hero</span></h6>
            <ul className='flex justify-between items-center space-x-6'>
                {
                    links?.map((link) => <Link className={`${pathName === link.path && "text-cyan-300"}`} key={link.path} href={link.path}>{link.title}</Link>)
                }
            </ul>
            <button onClick={handle} className='bg-white text-cyan-500 p-2'>Log In</button>
        </nav>
    )
}
