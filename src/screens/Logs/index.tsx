import {Log} from 'components/Log';
import {useAppDispatch, useAppSelector} from 'libs/store/hooks';
import {fetchLegacyLog, selectLegacyLogs} from 'libs/store/medium-log-slice';
import {selectUid} from 'libs/store/user-slice';
import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

export const Logs = () => {
  const logs = useAppSelector(selectLegacyLogs);
  const dispatch = useAppDispatch();
  const uid = useAppSelector(selectUid);
  useEffect(() => {
    if (uid) {
      dispatch(fetchLegacyLog(uid));
    }
  }, [dispatch, uid, logs]);
  const logKeys = Object.keys(logs);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {logKeys.map((key: string) => {
            return <Log date={key} key={key} log={logs[key]} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
