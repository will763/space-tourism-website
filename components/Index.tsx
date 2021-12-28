import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { fetchBackground } from './fetchBackground'
import Header from './Header'
import Main from './Main'


const Index: NextPage = () => {
  
  const router = useRouter();
  const {category} = router.query
  const [url,setUrl] = useState<undefined | string>("/home/background-home-mobile.jpg")

  useEffect(()=>{
    
    const handleBackgrround = () => {
      const screenWidth = window.innerWidth;
      const url = fetchBackground(category,screenWidth)
      setUrl(url)
    }

    handleBackgrround();

    window.addEventListener("resize",()=>{
        handleBackgrround();
    })

  },[category])

  return (
    <div className={`w-screen h-screen relative bg-cover bg-center`} style={{ backgroundImage: `url(${url})`} }>
      <Header />
      <Main />
  </div>
  )
}

export default Index