import database from '@react-native-firebase/database';
import {MediumLogState} from 'libs/utils/types/slice-state';

export const post = (mediumLog: MediumLogState, uid: string) => {
  const reference = database()
    .ref(`/${uid}/logs/${new Date().toISOString().slice(0, 10)}`)
    .push();
  reference.set(mediumLog).then(() => console.log('Data set.'));
};

export const getLogs = async (uid: string) => {
  return await database()
    .ref(`/${uid}/logs`)
    .once('value')
    .then(snapshot => {
      return snapshot.val();
    });
};

export default {post, getLogs};
