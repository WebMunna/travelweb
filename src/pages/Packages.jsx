import React from 'react'
import PackageBox from '../components/PackageBox'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Packages = () => {


  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease'
    });
  })

  return (
    <div data-aos='fade-right' className='packages' id='packages'>
     <h1 className='package-title'> Our Packages</h1>
     <div className="package-boxes">
       <PackageBox pic={'1'} place={'Mumbai'}/>
       <PackageBox pic={'2'} place={'Kashmir'}/>
       <PackageBox pic={'3'} place={'Sydney'}/>
       <PackageBox pic={'4'} place={'Paris'}/>
       <PackageBox pic={'5'} place={'China'}/>
       <PackageBox pic={'6'} place={'Egypt'}/>
     </div>
    </div>
  )
}

export default Packages