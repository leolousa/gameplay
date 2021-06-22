import React from 'react'
import { View, Text, Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

import PlayerSvg from '../../assets/player.svg';

import { GuildIcon } from '../GuildIcon';
import { categories } from '../../utils/categories';
import { theme } from '../../global/styles/theme';

export type GuildProps = {
  id: string
  name: string
  icon: null
  owner: boolean
}

export type AppointmentProps = {
  id: string
  guild: GuildProps
  category: string
  date: string
  description: string
}

type Props = RectButtonProps & {
  data: AppointmentProps
}

export function Appointment({ data, ...rest }: Props) {
  const [category] = categories.filter(item => item.id === data.category)
  const { owner } = data.guild
  const { primary, on } = theme.colors

  return (
    <RectButton {...rest}>
        <View style={styles.container}>
          <GuildIcon />

          <View style={styles.content}>
            <View style={styles.header}>
              <Text  style={styles.title}>
                { data.guild.name }
              </Text>
              <Text style={styles.title}>
                { category.title }
              </Text>
            </View>
            <View style={styles.playersInfo}>
              <PlayerSvg fill={ owner ? primary : on } />
            </View>
          </View>
        </View>
    </RectButton>
  )
}