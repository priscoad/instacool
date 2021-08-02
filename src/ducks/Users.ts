import { AnyAction, Dispatch } from "redux";
import { IState } from ".";
import { IServices } from '../services';

const SET_PROFILE_IMAGE = 'users/set-profile-image';

export const setProfileImage = (payload: string) => ({
    type: SET_PROFILE_IMAGE,
    payload,
});

export interface ILogin {
    email: string
    password: string
}

export default function reducer(state = {}, action: AnyAction){
    switch(action.type) {
        case SET_PROFILE_IMAGE: {
            return {
                ...state,
                profileImage: action.payload,
            }
        }
        default: {
            return state
        }
    }
}

export const login = ({ email, password }: ILogin) => 
    async (dispatch: Dispatch, getState: () => IState, { auth }: IServices) =>
        await auth.signInWithEmailAndPassword(email, password)

export const register = ({ email, password }: ILogin) =>
    async (dispatch: Dispatch, getState: () => IState, { auth, db }: IServices) => {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const { user } = userCredential
        const id = user ? user.uid : undefined;
        const doc = db.collection('users').doc(id);
       await doc.set({ role: 'user' });
    }

export const loadUserInitialData = () => async (dispatch: Dispatch, geState: () => any, { auth, storage }: IServices ) => {
    if(!auth.currentUser){
        return
    }
    const storageRef = storage.ref();
    const { uid } = auth.currentUser;
    const imageRef = storageRef
        .child('profileImages')
        .child(`${uid}.jpg`)
    
    const url = await imageRef.getDownloadURL();
    dispatch(setProfileImage(url));
}

export const handleProfileImageSubmit = (payload: any) => async (dispatch: Dispatch, getState: () => IState, { auth, storage }: IServices) => {
    console.log(payload);
    if(!auth.currentUser){
        return
    }

    const { uid } = auth.currentUser;
    const storageRef = storage.ref();
    const response = await storageRef
        .child(`profileImages`)
        .child(`${uid}.jpg`)
        .put(payload.profileImg)

    const url = await response.ref.getDownloadURL();
    dispatch(setProfileImage(url));
}