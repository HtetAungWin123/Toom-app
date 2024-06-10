import Callist from '@/components/Callist'
import React from 'react'

const Recordings = () => {
  return (
    <section className="text-3xl size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">
        Recordings
      </h1>
      <Callist type="recordings"/>
    </section>
  )
}

export default Recordings