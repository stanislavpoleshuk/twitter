import React from 'react';
import { ScrollView, StyleSheet, ViewProps } from 'react-native';
import { CommonStyle } from 'core/theme/styles/common.styles';

export interface ContentAreaProps extends ViewProps {
  children?: React.ReactNode;
}

export class ContentArea extends React.Component<ContentAreaProps> {
  public render() {
    const { style, children, ...viewProps } = this.props;
    return (
      <ScrollView
        {...viewProps}
        contentContainerStyle={styles.contentContainer}
        style={[styles.content, style]}
      >
        {children}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    ...CommonStyle.content,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});
