import Callist from '@/components/Callist'
import React from 'react'

const Previous = () => {
  return (
    <section className="text-3xl size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">
        Previous
      </h1>
      <Callist type="ended" />
    </section>
  )
}

export default Previous