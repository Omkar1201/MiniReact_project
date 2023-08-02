import React from 'react'
import './Spinner.css'
export default function Spinner() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
        </div>
    )
}
