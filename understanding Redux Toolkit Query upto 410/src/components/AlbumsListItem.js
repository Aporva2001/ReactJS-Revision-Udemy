import React from 'react'
import Button from './Button'
import ExpandablePanel from './ExpandablePanel'
import { GoTrashcan } from 'react-icons/go'
const AlbumsListItem = ({album}) => {
        const header=<div className='flex flex-row justify-between items-center'>
            <Button >
                <GoTrashcan />
            </Button>
            {album.title}
            </div>

      return <ExpandablePanel key={album.id} header={header}>
        List of Photos in the album
      </ExpandablePanel>
}

export default AlbumsListItem