import React, { useState, useEffect } from 'react'

const BackToTop = () => {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const btn = document.getElementById('btn--backtop')
    if (scroll > 300) {
      btn?.classList.add('show-back-to-top')
    } else {
      btn?.classList.remove('show-back-to-top')
    }
  }, [scroll])

  document.addEventListener('scroll', () => {
    const isScroll = document?.documentElement.scrollTop
    setScroll(isScroll)
  })

  const handleClick = (e) => {
    e.preventDefault()
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
  }
  //985dec
  return (
    <button id="btn--backtop" onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        width="3em"
        height="3em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 16 16"
      >
        <g fill="#985dec">
          <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
        </g>
      </svg>
    </button>
  )
}

export { BackToTop }
