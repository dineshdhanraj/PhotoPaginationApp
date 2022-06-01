import React from 'react';
import {Text, View} from 'react-native';
import styles from './PhotoPaginationStyles';
import {useSelector} from 'react-redux';
import {ItemSelector} from '../selectors/PhotoPaginationSelectors';

export default function PhotoPaginationItem() {

const list = useSelector(state => ItemSelector(state));

return (
    <View style={styles.MainContentView}>
      <View style={styles.seperator}>
        <Text style={styles.Heading}>Title</Text>
        <Text style={styles.textstyle} testID="Title">
          {list.pull_requests[0].title}
        </Text>
      </View>
      <View style={styles.seperator}>
        <Text style={styles.Heading}>Repo Name</Text>
        <Text style={styles.textstyle} testID="RepoName">
          {list.pull_requests[0].repo_name}
        </Text>
      </View>
      <View style={styles.seperator}>
        <Text style={styles.Heading}>Contribution</Text>
        <Text style={styles.textstyle} testID="Contributions">
          {list.contributions_count}
        </Text>
      </View>
      <View style={styles.seperator}>
        <Text style={styles.Heading}>organisation</Text>
        <Text style={styles.textstyle} testID="Organisation">
          {list.organisations.length}
        </Text>
      </View>
    </View>
  );
}
