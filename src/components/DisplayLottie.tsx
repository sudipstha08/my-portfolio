import React, { Suspense } from 'react'
import Lottie from 'react-lottie'
import Loading from './Loading'

const GreetingLottie = ({ animationData }: any) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  }

  return (
    <Suspense fallback={<Loading />}>
      <div onClick={() => null}>
        <Lottie options={defaultOptions} />
      </div>
    </Suspense>
  )
}

export default GreetingLottie