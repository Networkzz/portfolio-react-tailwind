import React from 'react'
import Clock from "./Clock"
import Bitcoin from './Bitcoin'
import BitcoinPrice from '../../services/BitcoinPrice'
function BitcoinContainer() {
  return (
    <div className="w-2/6 m-auto text-white pb-4 pt-4 text-center">
      <Bitcoin/>
      <div>Clock is ticking... <Clock/> while Bitcoin price is moving <BitcoinPrice/></div>
    </div>
  )
}

export default BitcoinContainer