import {Log} from 'components/Log';
import {useAppDispatch, useAppSelector} from 'libs/store/hooks';
import {fetchLegacyLog, selectLegacyLogs} from 'libs/store/medium-log-slice';
import {selectUid} from 'libs/store/user-slice';
import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

export const Logs = () => {
  const dispatch = useAppDispatch();
  const uid = useAppSelector(selectUid);
  useEffect(() => {
    if (uid) {
      dispatch(fetchLegacyLog(uid));
    }
  }, []);
  const logs = useAppSelector(selectLegacyLogs);
  console.log(logs)
  let logKeys
  if (logs) {
    logKeys = Object.keys(logs);
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {logKeys && logKeys.map((key: string, index) => {
            return <Log date={key} key={key} log={logs[index]} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
