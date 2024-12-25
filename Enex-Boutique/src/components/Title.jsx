// import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-[#a1eff2]  text-xl">
        {text1}
        <span className="text-[#10bfc5] font-medium text-xl">{text2}</span>
      </p>
      <p className="w-8 sm:w-12 h-[2px] bg-[#10bfc5]"></p>
    </div>
  );
}

export default Title
