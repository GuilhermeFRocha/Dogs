import React from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import useFetch from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../Api'


const FeedPhotos = () => {

  const {data, loading, error, request} = useFetch()

  React.useEffect(() => {
    async function fetchPhotos () {
      const {url,options} = PHOTOS_GET({page:1,total:6,user:0})
      const { response, json} = request (url,options)
    }
    fetchPhotos();
  }, [request])

  if (error) return <Error error={error} />
  if (loading) return <Loading />

  return (
    <div>
      <FeedPhotosItem/>
    </div>
  )
}

export default FeedPhotos