import React from 'react'
import { RealEstate, WhyChooseUs, RealEstateFAQ } from './JsonData'
import ServiceHome from '../ServiceHome'
import WhyChoose from '../WhyChoose'
import SolutionFaq from '../SolutionFaq'

const Services = () => {
  return (
    <div>
        <ServiceHome data={RealEstate} />
        <WhyChoose data ={WhyChooseUs}/>
        <SolutionFaq data={RealEstateFAQ} />
      
    </div>
  )
}

export default Services
