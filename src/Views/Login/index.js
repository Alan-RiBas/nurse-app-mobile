
import * as React from "react";
import { Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

import {styles} from './styles';

export default function Login() {
  
  return (
    <View style={styles.container}>
      <View style={styles.logoArea}>
        <Image
          source={require('../../../src/img/logo-nurse.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.inputTxt}
          placeholder="Email"
        />
        <TextInput
          style={styles.inputTxt}
          placeholder="Senha"
        />
        <View style={styles.forgotPswArea}>
          <Text style={styles.forgotPsw}>Esqueci minha senha</Text>
        </View>
      </View>

      <View style={styles.singInArea}>
        <TouchableOpacity style={styles.singIn}>
          <Text style={styles.singInBtn}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerArea}>
          <Text style={styles.registerBtn}>Quero me Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profissionalArea}>
        <Text style={styles.profissionalText}>Se você é profissional?</Text>
       
        <TouchableOpacity style={styles.profissionalBtnArea}>
          <Text style={styles. profissionalBtn}>Clique aqui</Text>
        </TouchableOpacity>
      </View>


    </View>
  );
}