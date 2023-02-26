import React, { FC } from 'react'

//骰子。 Flex
const Dice: FC = ({
}) => {
  return (
    <div className="flex justify-center">
      <div className="flex space-x-3">
        {/* 一 */}
        <div className="
          flex justify-center items-center
          w-12 h-12 rounded
          bg-indigo-500
        ">
          <div className="w-3 h-3 rounded-full bg-white"></div>
        </div>

        {/* 二 */}
        <div className="
          flex justify-between
          w-12 h-12 rounded
          p-1
          bg-indigo-500
        ">
          <div className="w-3 h-3 rounded-full bg-white"></div>
          <div className="self-end w-3 h-3 rounded-full bg-white"></div>
        </div>

        {/* 三 */}
        <div className="
          flex justify-between
          w-12 h-12 rounded
          p-1
          bg-indigo-500
        ">
          <div className="w-3 h-3 rounded-full bg-white"></div>
          <div className="self-center w-3 h-3 rounded-full bg-white"></div>
          <div className="self-end w-3 h-3 rounded-full bg-white"></div>
        </div>

        {/* 四 */}
        <div className="
          flex flex-col justify-between
          w-12 h-12 rounded
          p-1
          bg-indigo-500
        ">
          <div className="flex justify-between">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
          <div className="flex justify-between">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
        </div>

        {/* 五 */}
        <div className="
          flex flex-col justify-between
          w-12 h-12 rounded
          p-1
          bg-indigo-500
        ">
          <div className="flex justify-between">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
          <div className="flex justify-center">
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
          <div className="flex justify-between">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
        </div>

        {/* 六 */}
        <div className="
          flex flex-col justify-between
          w-12 h-12 rounded
          p-1
          bg-indigo-500
        ">
          <div className="flex justify-between">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
          <div className="flex justify-between">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
          <div className="flex justify-between">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default React.memo(Dice)
