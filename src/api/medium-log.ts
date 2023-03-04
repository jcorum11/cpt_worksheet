import database from '@react-native-firebase/database';
import {MediumLogState} from 'libs/utils/types/slice-state';

export const post = (mediumLog: MediumLogState, uid: string) => {
  if (uid === '' || uid == null) {
    throw new Error('uid undefined')
  }
  const reference = database()
    .ref(`/${uid}/logs/${new Date().toISOString().slice(0, 10)}`)
    .push();
  reference.set(mediumLog).then(() => console.log('Data set.')).catch((err) => {
    console.error('Error: could not set logs. ', err)
  });
};

export const getLogs = async (uid: string) => {
  return await database()
    .ref(`/${uid}/logs`)
    .once('value')
    .then(snapshot => {
      console.log(snapshot.val())
      return snapshot.val();
    })
    .catch((err) => {
      console.error('Error: could not fetch logs. ', err)
    });
};

export default {post, getLogs};

