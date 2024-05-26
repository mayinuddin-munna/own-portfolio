import { Button } from '@/components/ui/button'
import React from 'react'

function page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Button variant={'outline'}>
        <a href="https://github.com/mayinuddin-munna" target='_blank'>About me</a>
      </Button>
    </div>
  )
}

export default page