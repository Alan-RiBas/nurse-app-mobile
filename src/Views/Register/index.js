import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";


import { styles } from './styles'

export default function Register (){

  return(
    <View style={styles.container}>
      <View style={styles.perfilArea}>
        <Text style={styles.perfilTxt}>Insira seus dados e foto de indentificação</Text>
        <Image
          source={require('../../../src/img/Alan.jpeg')}
          style={styles.perfilImg}
        />
      </View>
      <View style={styles.inputForm}>
        <TextInput
            style={styles.inputTxt}
            placeholder="Nome"
        />
        <TextInput
            style={styles.inputTxt}
            placeholder="Email"
        />
        <TextInput
            style={styles.inputTxt}
            placeholder="Senha"
        />
        <TextInput
            style={styles.inputTxt}
            placeholder="Repetir a senha"
        />
        <View style={styles.doubleInput}>
          <TextInput
            style={styles.inputTxtDouble}
            placeholder="DN"
          />
          <TextInput
            style={styles.inputTxtDouble}
            placeholder="Sexo"
          />
        </View>
      </View>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btnBack}>
          <Text style={styles.btnTxt}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnNext}>
          <Text style={styles.btnTxt}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}