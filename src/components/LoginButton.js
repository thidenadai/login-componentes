import { View, Text,  TouchableOpacity} from 'react-native';
import { styles } from '../styles/stylesheets';


    
   

export default function LoginButton(){
    return (
        <View >
    
      
      <TouchableOpacity  
      style={styles.button} 
      onPress={() => alert("Agora voce esta logado!")}>
        <Text>Press Here</Text>
    </TouchableOpacity>
      
    </View>
  );
};
       
           