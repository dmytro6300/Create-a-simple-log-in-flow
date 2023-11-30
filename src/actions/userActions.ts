// userActions.ts
import { Dispatch } from 'redux';
import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  User,
} from '../constants/userTypes';
import { db } from '../helpers/firebase';

export const fetchUser = (
  uid: string
) => async (dispatch:Dispatch) => {
  dispatch({ type: FETCH_USER_REQUEST });

  try {
    // Replace 'users' with your Firestore collection name
    const userDoc = await db.collection('Users').doc(uid).get();
    if (userDoc.exists) {
      const userData = userDoc.data() as User;
      console.log("userProfile", userData);

      dispatch({ type: FETCH_USER_SUCCESS, payload: userData });
    } else {
      dispatch({ type: FETCH_USER_FAILURE, error: 'User not found' });
    }
  } catch (error) {
    dispatch({ type: FETCH_USER_FAILURE, error: error });
    console.log("error", error)
  }
};
