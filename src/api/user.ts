import auth from '@react-native-firebase/auth';

export const post = async (email: string, password: string) => {
  try {
    return auth().createUserWithEmailAndPassword(email, password);
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  }
};

export const fetchByUsername = (email: string, password: string) => {
  try {
    return auth().signInWithEmailAndPassword(email, password);
  } catch (error: any) {
    console.error(error);
  }
};

export default {post, fetchByUsername};
