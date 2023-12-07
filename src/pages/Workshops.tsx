import React from 'react'
import Hero from '@/components/workshops/Hero'
import EventCard from '@/components/workshops/EventCard'
import workshops from '@/data/workshops.json'

function WorkshopsPage() {
  return (
    <>
      <Hero />
      <EventCard workshop={workshops[0]} />
      <EventCard workshop={workshops[1]} />
      <EventCard workshop={workshops[2]} />
    </>
  )
}

export default WorkshopsPage
