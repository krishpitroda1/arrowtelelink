import React from 'react'
import { useEffect} from 'react'

import Analytics from './Analytics'
function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div className='relative'>
      <Analytics className='w-screen'/>
     </div>
  )
}

export default Services
