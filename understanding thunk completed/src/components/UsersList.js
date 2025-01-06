import { useEffect} from 'react';
import { useSelector } from 'react-redux';
import { addUser, fetchUsers } from '../store';
import Skeleton from './Skeleton';
import Button from './Button'
import { useThunk } from '../hooks/use-thunk';
import UsersListItem from './UsersListItem';


function UsersList() {
  // const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  // const [loadingUsersError, setLoadingUsersError] = useState(null);
  const [doFetchUsers, isLoadingUsers,loadingUsersError] = useThunk(fetchUsers);
  // const [isCreatingUser, setIsCreatingUser] = useState(false);
  // const [creatingUserError, setCreatingUserError] = useState(null);

  const [doCreateUser,isCreatingUser,creatingUserError] = useThunk(addUser);


  // const dispatch = useDispatch();
  const {  data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    // setIsLoadingUsers(true) // when the page is first loaded we will display the loading skeleton.
    // dispatch(fetchUsers()) // in case of dispatch functions if we use then and catch to detect if the promise is resolved or not, the then block will be called if the promise succeeds or fails.
    // // so here we will use unwrap on dispatch function above as when we use unwrap it returns a promise which behaves like a conventional promise.
    // .unwrap()
    // // .then(()=>{
    // //   // console.log('Success')
    // //   setIsLoadingUsers(false);
    // // })
    // // .catch((err)=>{
    // //   // console.log('Failed')
    // //   setLoadingUsersError(err)
    // //   setIsLoadingUsers(false);
    // // })
    // .catch((err)=> setLoadingUsersError(err))
    // .finally(()=> setIsLoadingUsers(false))
  // }, [dispatch]);
  doFetchUsers()
}, [doFetchUsers]);


const handleUserAdd =()=>{
  // setIsCreatingUser(true);
  // dispatch(addUser())
  // .unwrap()
  // .catch((err) => setCreatingUserError(err))
  // .finally(()=> setIsCreatingUser(false))

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
      // return (
      //   <div key={user.id} className="mb-2 border rounded">
      //     <div className="flex p-2 justify-between items-center cursor-pointer">
      //       {/* {user.name} */}

      //     </div>
      //   </div>
      // );
    });
  }
  // const renderedUsers = 

  return( <div>
    <div className='flex flex-row items-center justify-between m-3'>
      <h1 className='text-xl m-2'>Users</h1>
      {/* { */}
        {/* // isCreatingUser ? 'Creating User...' : */}
      <Button loading={isCreatingUser} onClick={handleUserAdd}>
        + Add User
      </Button>
    {/* // }  */}
    {
      creatingUserError && 'error creating user...' 
    }
    </div>
    {content}
    </div>
    )
}

export default UsersList;
