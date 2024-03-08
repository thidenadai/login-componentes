import { View, Text, Button} from 'react-native';
import { styles } from '../styles/stylesheets';

export default function LoginButton(){
    return (
        <View>
            <Button
  style={styles.Button}
  onPress={() => alert("Agora voce esta logado!!")}
  title="Login"
  color="black"

 
/>
        </View>
    )
}