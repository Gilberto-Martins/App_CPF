import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput , TouchableOpacity} from 'react-native';
import Validacao from './js/cpfValidacao.js'


export default function App() {
  const [cpf, setCpf] = useState('70223425478')

  function validacao(valida) {
    if(valida > 11){
      return 'Verdadeiro'
    }else{
      return 'Falso'
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Valiação de CPF:</Text>

      <TextInput style={[styles.imput, styles.text]}
        placeholder={'CPF:'}
        value={cpf}
        onChangeText={text => setCpf(text)}
        keyboardType={'numeric'}
      >
      </TextInput>

      <TouchableOpacity  style={styles.resposta}>
        <Text>Verificar CPF</Text>
      </TouchableOpacity>


    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imput: {
    width: 250,
    height: 44,
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8',
    textAlign: 'center',
  },
  resposta: {
    marginTop: 20,
    padding: 5,
    backgroundColor: '#e8e8e8',
    width: 110,
    height: 40,
    borderRadius: 15,
    alignItems: 'center',
  }
});
