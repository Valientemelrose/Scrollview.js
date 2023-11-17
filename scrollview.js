import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
    
    <View style={styles.item}>
        <Text style={styles.text}>LIST OF GUEST</Text>
      </View>
    
      <View style={styles.item}>
        <Text style={styles.text}>Melrose Valiente</Text>
        <Text style={styles.text}>Tagbilaran City</Text>

      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Jea Norene Oring</Text>
        <Text style={styles.text}>Balilihan</Text>

      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Ma. Luisa Tinaja</Text>
        <Text style={styles.text}>San Isidro</Text>

      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Nathaniel Coquilla</Text>
        <Text style={styles.text}>Antequerra</Text>

      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Sherwen Lahoy</Text>
        <Text style={styles.text}>Tagbilaran City</Text>

      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Lovelyn Magsino</Text>
        <Text style={styles.text}>Catigbian</Text>

      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Katherine Ayuban</Text>
        <Text style={styles.text}>Dauis</Text>

      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Daisy Diane Eusalan</Text>
        <Text style={styles.text}>Dauis</Text>

      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Rhizabelle Dalen</Text>
        <Text style={styles.text}>Dauis</Text>

      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Melrose Valiente</Text>
        <Text style={styles.text}>Tagbilaran City</Text>

      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Jea Norene Oring</Text>
        <Text style={styles.text}>Balilihan</Text>

      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Ma. Luisa Tinaja</Text>
        <Text style={styles.text}>San Isidro</Text>

      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Nathaniel Coquilla</Text>
        <Text style={styles.text}>Antequerra</Text>

      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Sherwen Lahoy</Text>
        <Text style={styles.text}>Tagbilaran City</Text>

      </View>
      
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#ffff0000',
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    
  },
});

export default App;
  
