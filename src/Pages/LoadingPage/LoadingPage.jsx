import React from 'react'
import { useLottie } from "lottie-react";
import loadingBall from '../../assets/lotties/loading-busketball.json'

const LoadingPage = () => {

  const options = {
    animationData: loadingBall,
    loop: true
  };

  const { View } = useLottie(options);

  return (
    <div className='container'>
      <div className="div flex justify-center my-20">
        {View}
      </div>
    </div>
  )
}

export default LoadingPage
