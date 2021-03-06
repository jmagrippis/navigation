import React from 'react';
import {Dimensions, View} from 'react-native';
import {NavigationMotion} from 'navigation-react-native';

export default ({stateNavigator}) => (
  <NavigationMotion
    startStateKey="scene"
    unmountedStyle={{translate: 1}}
    mountedStyle={(state, {translate = 0}) => ({translate})}
    crumbStyle={{translate: 0}}
    style={{flex: 1}}
    stateNavigator={stateNavigator}>
    {({translate}, scene, url) => (
      <View
        key={url}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          transform: [
            {translateX: Dimensions.get('window').width * translate},
          ]
        }}>
        {scene}
      </View>
    )}
  </NavigationMotion>
);
