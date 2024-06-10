
import Callist from '@/components/Callist'
import React from 'react'

const Upcoming = () => {
  return (
    <section className="text-3xl size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">
        Upcoming
      </h1>
      <Callist type="upcoming"/>
    </section>
  )
}

export default Upcoming