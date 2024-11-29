import React from 'react'
import { GamingService, WhyChooseGaming, GamingFAQ } from './JsonData'
import ServiceHome from '../ServiceHome'
import WhyChoose from '../WhyChoose'
import SolutionFaq from '../SolutionFaq'

const Service = () => {
  return (
    <div>
      <ServiceHome data={GamingService} />
      <WhyChoose data={WhyChooseGaming} />
      <SolutionFaq data={GamingFAQ}/>

    </div>
  )
}

export default Service
