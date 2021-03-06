import React from 'react';
import {StateNavigator} from 'navigation';
import Scene from './Scene';

export default () => {
  const stateNavigator = new StateNavigator([
    {key: 'sceneNorth', trackCrumbTrail: true},
    {key: 'sceneEast', trackCrumbTrail: true},
    {key: 'sceneSouth', trackCrumbTrail: true},
    {key: 'sceneWest', trackCrumbTrail: true},
  ]);

  const { sceneNorth, sceneEast, sceneSouth, sceneWest } = stateNavigator.states;
  sceneNorth.renderScene = (data, moveScene) => <Scene direction="North" color="blue" stateNavigator={stateNavigator}/>;
  sceneEast.renderScene = (data, moveScene) => <Scene direction="East" color="red" stateNavigator={stateNavigator}/>;
  sceneSouth.renderScene = (data, moveScene) => <Scene direction="South" color="green" stateNavigator={stateNavigator}/>;
  sceneWest.renderScene = (data, moveScene) => <Scene direction="West" color="black" stateNavigator={stateNavigator}/>;

  sceneNorth.unmountedStyle = () => ({translateY: -1});
  sceneEast.unmountedStyle = () => ({translateX: 1});
  sceneSouth.unmountedStyle = () => ({translateY: 1});
  sceneWest.unmountedStyle = () => ({translateX: -1});

  sceneNorth.mountedStyle = () => ({translateY: 0});
  sceneEast.mountedStyle = () => ({translateX: 0});
  sceneSouth.mountedStyle = () => ({translateY: 0});
  sceneWest.mountedStyle = () => ({translateX: 0});

  sceneNorth.crumbStyle = () => ({translateY: -.3});
  sceneEast.crumbStyle = () => ({translateX: .3});
  sceneSouth.crumbStyle = () => ({translateY: .3});
  sceneWest.crumbStyle = () => ({translateX: -.3});
  
  return stateNavigator;
}
