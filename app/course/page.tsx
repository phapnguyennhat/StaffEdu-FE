import React from 'react'
import NavHeader from './components/NavHeader'
import { Search } from 'lucide-react'
import SearchCourse from './components/SearchCourse'
import ListCourse from './components/ListCourse'

export default function CoursePage() {
  return (
    <>
          <NavHeader />
            <ListCourse/>
    </>
  )
}
