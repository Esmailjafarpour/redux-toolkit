import React , { useEffect } from 'react';
import { useDispatch , useSelector } from  "react-redux";
import { fetchUsers } from "../features/users/usersSlice";

const Users = () => {

     const dispatch = useDispatch();
     const users = useSelector((state) => state.users);

     useEffect(() => {
        dispatch(fetchUsers())

     }, []);

     return (
          <div>

             {users.loading ? <h4>Loading ...</h4> : null}

             {users.users.length ? 
               
               users.users.map(user => <p key={user.id}>{user.name}</p>)
               :
               null

             }

             {users.error&& <p>{users.error}</p>}

          </div>
     );
}

export default Users;
