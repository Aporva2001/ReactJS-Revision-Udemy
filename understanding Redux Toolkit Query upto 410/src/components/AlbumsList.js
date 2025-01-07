import React from 'react'
import { useFetchAlbumsQuery,useAddAlbumMutation } from '../store'
import Skeleton from './Skeleton'
import ExpandablePanel from './ExpandablePanel'
import Button from './Button'
import AlbumsListItem from './AlbumsListItem'

const AlbumsList = ({user}) => {
  // const results =useFetchAlbumsQuery(user) // when we call this hook we will fetch some data, this argument is sent to the query function
  const {data, isLoading, error} = useFetchAlbumsQuery(user);
  // useFetchAlbumsQuery(user); // even though we have two seperate calls for the hook only one request was issued.


  // Whenever a new request is issued RTQ is going to look if we have a similar pending request with same endpoints and arguments.
  // Here we want to implement a strategy that when the addAlbumMutation hook is called it should automatically make another request to fetch the users.  So we use the concept of tags here.
  
  //Tag system is used to mark certain queries outofdate after we run certain mutations.
  // When we mark the query as out of date all the data is wipped out and the new request is made.
  const [addAlbum,results] = useAddAlbumMutation() // addAlbum is a function and when we call this function then only the mutation gets executed.
  // The results is an object similar to the results in the useFetchAlbumsQuery hook

  const handleAddAlbum= ()=>{
    addAlbum(user);
  }
  let content;

  if(isLoading){
    content = <Skeleton className='h-10 w-full' times={3}/>
  }
  else if(error){
    content= <div>Error loading albums..</div>
  }

  else{
    content = data.map((album) =>{
      return <AlbumsListItem key={album.id} album={album}/>
      // const header=<div>{album.title}</div>

      // return <ExpandablePanel key={album.id} header={header}>
      //   List of Photos in the album
      // </ExpandablePanel>
    })
  }
  //  The hook will be called when the data is first rendered on the screen we dont need to define any useEffect, it is done for us automatically.
  // console.log(data, error, isLoading);
 
  // console.log(results); // refetch function is used when we want to force the refetching of the data.
  // isLoading is used if we are fetching the data for the first time.
  // isFetching is set to true anytime we are making request.
  return (
    <div>
       <div className='m-2 flex flex-row items-end justify-between'>
       <h3 className='text-lg font-bold'>Albums for {user.name}</h3> 
        <Button loading={results.isLoading} onClick={handleAddAlbum}>
        + Add Album
        </Button>
       </div>
       <div>
        {content}
       </div>
    </div>
  )
}

export default AlbumsList