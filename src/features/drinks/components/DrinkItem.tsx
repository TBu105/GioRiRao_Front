import React from "react"

interface DrinkProps {
  thumbnail: string
  name: string
  price: number
  onClick?: () => void
}

const DrinkItem = ({ thumbnail, name, price, onClick }: DrinkProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-gray-900 rounded-xl p-4 flex flex-col items-center"
    >
      {/* Image */}
      <div className="w-24 h-24 mb-3 overflow-hidden rounded-full">
        <img
          src={thumbnail}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="text-white text-center text-lg font-medium min-h-[3rem]">
        {name}
      </h3>

      {/* Price */}
      <p className="text-white text-center text-sm">
        {price.toLocaleString("vi-VN")} VND
      </p>
    </div>
  )
}

export default DrinkItem
