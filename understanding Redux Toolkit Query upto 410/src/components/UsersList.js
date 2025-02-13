import { useEffect} from 'react';
import { useSelector } from 'react-redux';
import { addUser, fetchUsers } from '../store';
import Skeleton from './Skeleton';
import Button from './Button'
import { useThunk } from '../hooks/use-thunk';
import UsersListItem from './UsersListItem';


function UsersList() {
  const [doFetchUsers, isLoadingUsers,loadingUsersError] = useThunk(fetchUsers);

  const [doCreateUser,isCreatingUser,creatingUserError] = useThunk(addUser);
  const {  data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
  doFetchUsers()
}, [doFetchUsers]);


const handleUserAdd =()=>{


  doCreateUser()
}

let content;
  if (isLoadingUsers) {
    content=  <Skeleton times={6} className="h-10 w-full" />;
  }

  else if (loadingUsersError) {
    content= <div>Error fetching data...</div>;
  }
  else{
    content= data.map((user) => {
      return ( <UsersListItem user={user} key={user.id}/>)
    });
  }

  return( <div>
    <div className='flex flex-row items-center justify-between m-3'>
      <h1 className='text-xl m-2'>Users</h1>
      <Button loading={isCreatingUser} onClick={handleUserAdd}>
        + Add User
      </Button>
    {
      creatingUserError && 'error creating user...' 
    }
    </div>
    {content}
    </div>
    )
}

export default UsersList;
