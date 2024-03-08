import { View, Text } from 'react-native';
import LoginImageBackground from '../components/LoginImageBackground';
import LoginButton from '../components/LoginButton';
import LoginText from '../components/LoginText';
import LoginInput from '../components/LoginInput';
import LoginImage from '../components/LoginImage';

export default function Login(){
    return (
        <LoginImageBackground>
       <LoginText/>
       <LoginInput/>
       <LoginButton/>
       <LoginImage/>
        </LoginImageBackground>
    )
}