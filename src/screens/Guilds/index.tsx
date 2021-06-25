import React from 'react'
import { View, FlatList, Text } from 'react-native';
import { Guild } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'
import { GuildProps } from '../../components/Guild';

import { styles } from './styles'

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'imagem.png',
      owner: true
    },
    {
      id: '2',
      name: 'Os caras',
      icon: 'imagem.png',
      owner: true
    },
    {
      id: '3',
      name: 'Os caras',
      icon: 'imagem.png',
      owner: true
    },
    {
      id: '4',
      name: 'Os caras',
      icon: 'imagem.png',
      owner: true
    },
    {
      id: '5',
      name: 'Os caras',
      icon: 'imagem.png',
      owner: true
    },
    {
      id: '6',
      name: 'Os caras',
      icon: 'imagem.png',
      owner: true
    }
  ]

  return (
    <View style={styles.container}>
      <FlatList 
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild 
            data={item} 
            onPress={() => handleGuildSelect(item)}
          />
        )}    
        style={styles.guilds}
        showsVerticalScrollIndicator={false}
        decelerationRate={0.99}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        ListHeaderComponent={() => <ListDivider isCentered />}
        contentContainerStyle={{ paddingBottom: 69, paddingTop: 103 }}
      />
    </View>
  );  
}