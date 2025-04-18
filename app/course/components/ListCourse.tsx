import { Car } from 'lucide-react'
import React from 'react'
import CardCourse from './CardCourse'

export default function ListCourse() {
  return (
    <section>
          <ul className=' mx-[60px] grid lg:grid-cols-3 gap-8' >
              <li className=' shadow-lg bg-[#fff] overflow-hidden rounded-[10px]' >
                  <CardCourse/>
              </li>
              <li className=' shadow-lg bg-[#fff] overflow-hidden rounded-[10px]' >
                  <CardCourse/>
              </li>
              <li className=' shadow-lg bg-[#fff] overflow-hidden rounded-[10px]' >
                  <CardCourse/>
              </li>
      </ul>
    </section>
  )
}
