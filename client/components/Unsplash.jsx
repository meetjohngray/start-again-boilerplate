import React, { useState, useEffect } from 'react'
import { getUnsplash } from '../apis/unsplash'

const refreshPage = () => {
  window.location.reload()
}

function Unsplash() {
  const [image, setImage] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getUnsplash()
      .then((res) => {
        setImage(res)
      })
      .then(() => {
        setLoading(false)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  if (loading) return <h3>The wait will be worth it...</h3>
  return (
    <>
      <div>
        <img src={image.urls.small} alt="unsplash" width="400px" />
      </div>
      <div>
        <button className="button" onClick={refreshPage}>
          Lets see another!
        </button>
      </div>
    </>
  )
}

export default Unsplash
