import {Log} from 'components/Log';
import {useAppSelector} from 'libs/store/hooks';
import {selectLegacyLogs} from 'libs/store/medium-log-slice';
import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

export const Logs = () => {
  const logs = useAppSelector(selectLegacyLogs);
  const logKeys = Object.keys(logs);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {logKeys.map((key: string) => {
            return <Log key={key} log={logs[key]} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
