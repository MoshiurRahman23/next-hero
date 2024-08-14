import Link from 'next/link'
import React from 'react'

export default function AboutContents() {
    return (
        <div className="flex-col space-y-4">
            <Link href="/about/history">History</Link>
            <Link href="/about/mission">Mission</Link>
        </div>
    )
}
