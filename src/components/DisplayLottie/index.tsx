import React, { Suspense, FC } from "react"
import Lottie from "react-lottie"
import { Loading } from "../Loading"

interface IProps {
  animationData?: any
}

const DisplayLottie: FC<IProps> = ({ animationData }) => {
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

export { DisplayLottie }
