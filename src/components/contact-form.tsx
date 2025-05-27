'use client'
import { useState } from 'react'

export default function Contactform() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  const [number, setNumber] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()

    fetch('/api/', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        number,
        text,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })

    alert('Thank you for reaching out!')
    // Clear form
    setName('')
    setEmail('')
    setNumber('')
    setText('')
  }

  return (
    <div className="w-full p-6 shadow-lg rounded-lg text-left pl-10 pt-10 flex justify-center">
      <form className="w-[70%] flex flex-col justify-center" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-accent font-medium mb-2">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-accent"
          />
        </div>
        <div className="mb-4">
          <label className="block text-accent font-medium mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-accent"
          />
        </div>
        <div className="mb-4">
          <label className="block text-accent font-medium mb-2">Number:</label>
          <input
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-accent"
          />
        </div>
        <div className="mb-4">
          <label className="block text-accent font-medium mb-2">Ask us:</label>
          <textarea
            rows={5}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-accent"
          ></textarea>
        </div>
        <button
          className="w-full bg-orange-600 mt-3 p-2 rounded-full text-white hover:bg-orange-500 active:scale-95"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
