import React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'

import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { useState } from 'react';
import { ListHeader } from '../../components/ListHeader';
import { Background } from '../../components/Background'
import { ListDivider } from '../../components/ListDivider';
import { Appointment } from '../../components/Appointment';


export function Home() {
  const [ category, setCategory ] = useState('')

  const appointments = [
    {
      id: '1',
      guild: {
        id: '`1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida md10'
    },
    {
      id: '2',
      guild: {
        id: '`1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida md10'
    },
    {
      id: '3',
      guild: {
        id: '`1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida md10'
    },
    {
      id: '4',
      guild: {
        id: '`1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida md10'
    },    {
      id: '5',
      guild: {
        id: '`1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida md10'
    },
    {
      id: '6',
      guild: {
        id: '`1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida md10'
    },
    {
      id: '7',
      guild: {
        id: '`1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida md10'
    },
    {
      id: '8',
      guild: {
        id: '`1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida md10'
    }
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  return (
    <Background>

      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader 
          title="Partidas agendadas"
          subtitle="Total 6"
        />

        <FlatList style={styles.matches}
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment data={item} />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider/>}
        />
      </View>
    </Background>
  )
}