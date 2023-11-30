// HomePage.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../actions/userActions';
import { Root } from '../store/store';
const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector((state:Root) => state.root);
    useEffect(()=>{
        if(state.auth.auth === null || state.auth.auth === undefined){
            navigate('/');
        }else{
            const uid = state.auth.auth.uid;
            fetchData(uid);
        }
    }, [dispatch]);

    const fetchData = async (uid:string) => {
        try {
            // Call the fetchUsers function with await
            const fetchUserProfileChunk = fetchUser(uid);
            await fetchUserProfileChunk(dispatch);
        } catch (error) {
            console.log('Error fetching users:', error);
        }
    };
    return (
        <div className='flex items-center justify-center'>
            <h1>Welcome {state.user.user?.first_name} {state.user.user?.last_name}!</h1>
            {/* Your home page content */}
        </div>
    );
};

export default HomePage;
