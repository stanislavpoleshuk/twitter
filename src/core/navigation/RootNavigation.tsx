import React from 'react';
import { StackActions, DrawerActions } from '@react-navigation/native';

export const navigationRef = React.createRef<any>();
export const isAppMountedRef = React.createRef<boolean>();

export function navigate(name: string, params?: any) {
  safetyNavigationCall(() => {
    navigationRef.current && navigationRef.current.navigate(name, params);
  });
}

export function push(name: string, ...args: any | undefined) {
  safetyNavigationCall(() => {
    navigationRef.current?.dispatch(StackActions.push(name, ...args));
  });
}

export function pop(...args: any) {
  safetyNavigationCall(() => {
    navigationRef.current?.dispatch(StackActions.pop(...args));
  });
}

export function popToTop() {
  safetyNavigationCall(() => {
    navigationRef.current?.dispatch(StackActions.popToTop());
  });
}

export function goBack() {
  safetyNavigationCall(() => {
    navigationRef.current && navigationRef.current.goBack();
  });
}

export function dispatch(action: any) {
  safetyNavigationCall(() => {
    navigationRef.current?.dispatch(action);
  });
}

function safetyNavigationCall(successCallback: any) {
  if (canUseNavigation()) {
    successCallback();
  } else {
    setTimeout(() => {
      safetyNavigationCall(successCallback);
    }, 100);
  }
}

function canUseNavigation() {
  return !!(isAppMountedRef.current && navigationRef.current);
}

export function closeDrawer() {
  dispatch(DrawerActions.closeDrawer());
}

export function openDrawer() {
  dispatch(DrawerActions.openDrawer());
}
