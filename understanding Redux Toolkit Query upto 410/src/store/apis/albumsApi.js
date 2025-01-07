import { faker } from '@faker-js/faker';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// DEV ONLY!!!
const pause = (duration) => {
    return new Promise((resolve) => {
      setTimeout(resolve, duration);
    });
  };

const albumsApi= createApi({
    reducerPath: 'albums', // this is the key where the state information will be stored inside the redux store.
    baseQuery: fetchBaseQuery({ // This is going to give us the preconfigured version of the fetch function.
        baseUrl: 'http://localhost:3005', // This is the url where our server is hosted.
        fetchFn: async (...args)=>{ // overriding the default fetch function used by redux
            await pause(1000);

            return fetch(...args)
        },
    }), 
    // Queries run immediately when the component is displayed on the screen.
    //
    endpoints(builder){ // This function is called automatically.
        return{
            addAlbum: builder.mutation({
                // invalidatesTags: ['Album'],
                invalidatesTags: (results, error, user)=>{ // user is the argument which is passed to the mutation hook as an argument 
                    return [{type: 'Album', id: user.id}]
                },
                query: (user)=>{
                    return{
                        url: '/albums',
                        method: 'POST',
                        body: {
                            title: faker.commerce.productName(),
                            userId: user.id
                        }
                    }
                }
            }),
            fetchAlbums: builder.query({ // builder.query specifies whether we are going to write a query or mutation
                // providesTags: ['Album'], // Tags can be string or an object with 2 properties type and id
                providesTags: (results, error, user)=>{
                    return [{type: 'Album', id: user.id}]
                },
                query: (user)=> { // This is the argument  which was passed to the hook
                    return {
                        url: '/albums', // this url will be joined to the baseUrl
                        params: { // here we will add query strings.
                            userId: user.id
                        },
                        method: 'GET'
                    }
                }
            })

        }

    }
});

// albumsApi.useFetchAlbumsQuery() // This is the hook which is automatically generated from the endpoint template above

export const {useFetchAlbumsQuery,useAddAlbumMutation} = albumsApi; // exporting the hook
export {albumsApi};