// SPA
// SSR
// SSG

import { useEffect } from "react"

export default function Home(props) {
  // Esse modo não functiona com javascript desabiltado, porém não é descartável: 
  // useEffect(() => {
  //   fetch('http://localhost:3333/episodes').then(response => response.json()).then(data => console.log())
  // }, [])
  console.log(props.episodes)

  return (
    <>
    <h1>index</h1>
    {/* <p>{JSON.stringify(props.episodes)}</p> */}
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data
    },
    revalidate: 60 * 60 * 8
  }
}