import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';



const Prouduct = (props) => {

    return(
        <View style={styles.container}>
            <Text>Prouduct</Text>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('ProuductDetails')}}>
                <Text>Go to prouducts</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00cc99',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default Prouduct;
