import { useState } from 'react'; // Hooks
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';

// Styles Imports
import { styles } from './styles';

// Components Imports
import { Participant } from '../../components/Participant';

// Helpers
import getCurrentDate from '../../helpers/getCurrenteDate';

export default function Home() {
  const [participantName, setParticipantsName] = useState<string>('');
  const [participants, setParticipants] = useState<string[]>([]);
  // const participants: Array<string> = [];

  function handleParticipantAdd() {
    if (participants.includes(participantName.trim())) {
      return Alert.alert("Participante existe", `O participante já foi adicionada na lista!`);
    }
    setParticipants(prevState => [...prevState, participantName.trim()]);
    setParticipantsName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover Participante', `Remover o participante ${name}?`, [
      { text: 'Sim', onPress: () => {
        setParticipants(prevState => prevState.filter(participant => participant !== name));
      } },
      { text: 'Não', style: 'cancel' },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>{getCurrentDate()}</Text>

      <View style={styles.containerForm}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantsName}
          value={participantName}
        />
        <TouchableOpacity style={styles.containerButton} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Nenhum Participante Adicionado</Text>
        )}
      />
    </View>
  )
}