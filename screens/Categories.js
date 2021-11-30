import React ,{useState} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,FlatList ,Image} from 'react-native';
import mydb from '.././db'



   
const Categories = (props) => {
    const users=mydb
    return(
        <View style={styles.container}>
            <Text>Categories</Text>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('Prouducts')}}>
                <Text>Go to prouducts</Text>
            </TouchableOpacity>
            
               
                
                <FlatList style={{width:'100%'}}
                    data={users}
                    keyExtractor={item => item.id}
                    renderItem={myusers=>
                    <View >
                         <Text></Text>
                        <TouchableOpacity style={{alignItems:'center'}} onPress={()=>{props.navigation.navigate('ProuductDetails',{prouduct:myusers.item})}}>
                            <Image style={{width:200 , height:300 }} source={{uri:myusers.item.imgUrl}}/>
                            <Text></Text>
                        </TouchableOpacity>

                    </View>
                    }

                 />                
              
                
              
                    
          
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

  export default Categories;
