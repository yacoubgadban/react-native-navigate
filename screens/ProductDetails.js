import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native';

const ProuductDetails = (props) => {
    const detail=props.route.params.prouduct
    return(
        <View style={styles.container}>
            <Text>ProuductDetails</Text>
            <Text></Text>
            <Image style={{width:200 , height:300}} source={{uri:detail.imgUrl}}/>
            <Text>{detail.id}</Text>
            <Text>{detail.name}</Text>
            <Text>{detail.age}</Text>
           
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default ProuductDetails;
