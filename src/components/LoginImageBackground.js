import { View, Text, Image, ImageBackground} from 'react-native';
import { styles } from '../styles/stylesheets';
import LoginText from './LoginText';
import LoginButton from './LoginButton';
import LoginImage from './LoginImage';
const img1 = { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7QACnPVt05VA96sn1zx3skkQZDqB9EaRLPg&usqp=CAU'}
import LoginInput from './LoginInput';


export default function LoginImageBackground(){
    return (
           <ImageBackground
            style={styles.imageBackground}
            source={img1}
            >
                <LoginText />
                <LoginInput />
                <LoginButton />
                <LoginImage />
                
            </ImageBackground>
    )
}