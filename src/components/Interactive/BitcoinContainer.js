import React from 'react'
import Clock from "./Clock"
import Bitcoin from './Bitcoin'
import ApiRequest from '../../services/ApiRequest'
function BitcoinContainer() {
  return (
    <div className="w-2/6 m-auto text-white pb-4 pt-4 text-center">
      <Bitcoin/>
      <div>Clock is ticking... <Clock/> while Bitcoin price is moving <ApiRequest/></div>
    </div>
  )
}

export default BitcoinContainer