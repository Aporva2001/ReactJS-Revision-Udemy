import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { usersReducer } from './slices/usersSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { albumsApi } from './apis/albumsApi';


export const store = configureStore({
  reducer: {
    users: usersReducer,
    // albums: albumsApi.reducer // The key provided here should match the key provided in the reducer path as here all the information will be stored.
    //ALITER
    [albumsApi.reducerPath] : albumsApi.reducer // [albumsApi.reducerPath] means to go and lookup for reducerPath property in albumsApi.
  
  },
  middleware: (getDefaultMiddleware)=>{
    return getDefaultMiddleware()
    .concat(albumsApi.middleware);
  }
});

setupListeners(store.dispatch);

//ONLY FOR TESTING----
// window.store= store;
//---
export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';

export {useFetchAlbumsQuery,useAddAlbumMutation} from './apis/albumsApi'