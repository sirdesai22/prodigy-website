import React from 'react'

const OrganiserCard = ({ name, phno, photo, desig }) => {
  return (
    <div className="relative h-[400px] w-[300px] rounded-lg shadow-xl shadow-[#0008]">
      <img
        src={photo}
        alt="Photo"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-lg"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{name}</h1>
        <p className="mt-2 text-sm font-semibold text-gray-300">
          {desig || ''}
        </p>
        <p className="mt-2 text-sm text-gray-300">
          Ph.no: {phno || 'Not available'}
        </p>
      </div>
    </div>
  )
}

export default OrganiserCard