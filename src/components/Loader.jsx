import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

export default function LoaderComponent() {
  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
  return (
    <Loader
    type="Circles"
    color="#00BFFF"
    height={100}
    width={100}
    style={style}
 />
  )
}
