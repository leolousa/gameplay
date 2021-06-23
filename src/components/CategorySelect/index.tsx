import React from 'react';
import { ScrollView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';
import { categories } from '../../utils/categories'
import { Category } from '../Category/index';

type Props = {
  categorySelected: string,
  setCategory: (categoryId: string) => void
  hasCheckBox?: boolean
}

export function CategorySelect({
  categorySelected,
  setCategory,
  hasCheckBox = false
}: Props){

  return(
      <ScrollView
        horizontal
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 40 }}
      >
        {
          categories.map(cat => (
            <Category 
              key={cat.id}
              title={cat.title}
              icon={cat.icon}
              checked={cat.id === categorySelected}
              onPress={() => setCategory(cat.id)}
              hasCheckBox={hasCheckBox}
            />
          ))
        }
      </ScrollView>
  )
}