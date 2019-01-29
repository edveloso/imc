/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props)
    this.state = {altura: 0, massa: 0, resultado: 0, resultadoText: ""}
    this.calcular = this.calcular.bind(this)
  }

  calcular(){
    let imc = this.state.massa /  (this.state.altura * this.state.altura)
    let s = this.state
    s.resultado = imc

    if(s.resultado < 16){
      s.resultadoText = "magresa leve"
    }else {
      s.resultadoText = "sobrepeso"
    }

    this.setState(s)
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.entradas}>
          <TextInput placeholder="Altura"  
            keyboardType="numeric" 
            onChangeText={(altura) => {this.setState({altura})}}
            style={styles.input} />
          <TextInput placeholder="Massa" 
            onChangeText={(massa) => {this.setState({massa})}}
            keyboardType="numeric" 
            style={styles.input}/>      
        </View>
        <TouchableOpacity  style={styles.button} onPress={this.calcular}><Text style={styles.buttonText} >Calcular</Text></TouchableOpacity>
        <Text style={styles.resultado} >{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, {fontSize:35} ]} >{this.state.resultadoText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#F5FCFF',
  },  
  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 50,
    marginTop:24,
  },
  entradas: {
    flexDirection: 'row',    
  },
  button:{
    backgroundColor: '#89ffa5',
  },
  buttonText:{
    alignSelf: "center",
    padding: 30,
    fontSize: 25,
    color: "#6dc4a4",
    fontWeight: "bold",
  },
  resultado: {
    alignSelf: "center",
    color: "lightgray",
    fontSize: 65,
    padding: 15,
  }

});
