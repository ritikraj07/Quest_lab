import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

export default function Card() {
    return (
        <View style={styles.mainView} >
            <ImageBackground source={require('../Images/card.png')} style={styles.card} >
                <View style={styles.cardView}>
                    <View style={{ height: '100%' }}>
                        <Image source={require('../Images/Hoyt.png')} style={styles.chicken} />
                    </View>
                    <View style={{ width: 210, marginRight: 25 }}>
                        <Text style={{ fontSize: 18, color: 'black', fontWeight: 600 }} >The Original Hot Chicken</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20, }} >
                            <View style={{ alignItems: 'center' }}>
                                <Image source={require('../Images/cardIcon1.png')} style={styles.logo} />
                                <Text style={styles.logoText} >300 XP</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={require('../Images/cardIcon2.png')} style={styles.logo} />
                                <Text style={styles.logoText} >3 Level</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={require('../Images/cardIcon3.png')} style={styles.logo} />
                                <Text style={styles.logoText} >5 Eggs</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", width: '100%' }}>
                            <View style={{ width: '65%', marginLeft: 10 }}>
                                <Text>
                                    Scan QR Code Now to get more details!
                                </Text>
                            </View>
                            <View>
                                <Image source={require("../Images/qrcode.png")} style={{ width: 50, height: 50 }} />
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>


    )
}

const styles = StyleSheet.create({
    mainView: {
        marginVertical: 20,
        borderRadius: 20,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        overflow: 'hidden',
        elevation: 8,
    },
    card: {
        height: 200,
        overflow: 'hidden',
        paddingBottom: 10,

    },
    cardView: {
        width: '90%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    chicken: {
        width: 100,
        height: 180,
        margin: 5,
        resizeMode: 'contain'
    },
    img: {
        width: 80,
        height: 80
    },
    logo: {
        width: 24,
        height: 24,
        margin: 5
    },
    logoText: {
        textAlign: 'center',
        color: 'black'
    }
})