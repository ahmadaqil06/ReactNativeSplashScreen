import React, { useEffect } from 'react'
import { StyleSheet, ImageBackground, Image } from 'react-native'
import { SplashBackground, Logo, Logo2 } from '../../assets'

const Splash = ({ navigation }) => {
    
    useEffect(() => {
        setTimeout( () => {
            navigation.replace('MainApp');
        }, 3000)
    }, [navigation]);

    return (
       <ImageBackground source={SplashBackground} style={styles.background}>
           <Image source={Logo} style={styles.logo} />
           <Image source={Logo2} style={style.Logo2} />
       </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 555,
        height: 205
    },
    logo2:{ 
        width: 222,
        height: 105
    }
})
