import React from 'react'

export default function layout({ children }) {
    return (
        <div>
            <div className="bg-green-400 p-4">
                {children}
            </div>
            Dashboard Layout
            <footer>
                Footer Part
            </footer>
        </div>
    )
}
