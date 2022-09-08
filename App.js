import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import React, { useState } from 'react';
import concertImage from './assets/concert.png';

export default function App() {
  const [isChanged, setIsChanged] = useState(false);
  const [numberOfTickets, setNumberOfTickets] = useState(null);
  var ticketCost = (numberOfTickets * 99.99).toFixed(2);

  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

  return (
    
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>Ticket Vault</Text>
      </View>
      <View style={styles.textInputSection}>
      <TextInput
          style={styles.numberInput}
          placeholder="Number of Tickets"
          onChangeText={setNumberOfTickets}
          value={numberOfTickets}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonSection}>
      <TouchableOpacity 
          style={styles.button}
          onPress={() => {
            setIsChanged(true);
        }}
        >
          <Text style={styles.buttonText}>Find the Cost</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.costSection}>
        <Text style={styles.costText}>
          {isChanged ? "Ticket Cost:  $" + ticketCost : null}
        </Text>
      </View>
      <View style={styles.bottomSection}>
      <Image
          source={concertImage}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    marginTop:  10,
    marginBottom:  10,
    padding:  5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topSection:  {
    flexGrow:  1,
    margin:  10
  },
  title:  {
    fontSize:  48,
    fontWeight:  'bold',
    textAlign:  'center'
  },
  textInputSection:  {
    flexGrow:  1,
    margin:  10
  },
  numberInput:  {
    height:  50,
    width:  250,
    alignSelf:  'center',
    textAlign:  'center',
    margin:  10,
    borderWidth:  1,
    padding:  10,
    fontSize:  24,
    fontWeight:  'bold',
    color:  'grey',
  },
  buttonSection:  {
    flexGrow:  1,
    margin:  10,
  },
  button:  {
    backgroundColor:  '#f98b88',
    paddubg:  20,
    borderRadius:  5,
    height:  40,
    width:  220,
  },
  buttonText:  {
    fontSize:  24,
    fontWeight:  'bold',
    textAlign:  'center',
  },
  costSection:  {
    flexGrow:  1,
    margin:  10,
  },
  costText:  {
    fontSize:  28,
    fontWeight:  'bold',
  },
  bottomSection: {
    flexGrow:  1,
    margin:  10,
  }
});
