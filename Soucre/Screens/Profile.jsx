import { useState } from 'react';
import { View, Text, Image, ViewComponent, StyleSheet, TouchableOpacity } from 'react-native'
import Bandage from '../Components/Bandage';
import Card from '../Components/Card';

function Profile({ name = "Anna Smith" }) {
    const [isBandage, setisBandage] = useState(true)
    return (
        <View style={{ backgroundColor: 'white', height: '100%', flex: 1, alignItems: 'center', backgroundColor: '#FFFBF8' }} >
            <View style={{ overflow: 'hidden', paddingBottom: 8, height: '45%', width: "100%" }} >
                <View style={styles.topContainer} >
                    <Image source={require('../Images/profile.png')} style={{ width: 110, height: 110, margin: 8 }} />
                    <Image source={require('../Images/setting.png')} style={{ width: 26, height: 26, position: 'absolute', top: 30, right: 30 }} />
                    <View style={{ width: '100%' }} >
                        <Text style={{ color: 'black', fontSize: 22, textAlign: 'center' }} >{name}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingHorizontal: 35 }} >
                            <View style={styles.topnav}>
                                <Image source={require("../Images/topnav1.png")} style={styles.topnavImg} />
                                <Text style={styles.topnavText}>300 XP</Text>
                            </View>
                            <View style={styles.topnav}>
                                <Image source={require("../Images/topnav2.png")} style={styles.topnavImg} />
                                <Text style={styles.topnavText}>3 Level</Text>
                            </View>
                            <View style={styles.topnav}>
                                <Image source={require("../Images/topnav3.png")} style={styles.topnavImg} />
                                <Text style={styles.topnavText}>5 Eggs</Text>
                            </View>
                        </View>
                        <View style={styles.optionsBvsM}>
                            <View style={{ width: '48%', alignItems: 'center', justifyContent: 'center' }} >
                                <TouchableOpacity onPress={() => {
                                    setisBandage(true)
                                }} >
                                    <Text style={isBandage ? { color: 'red' } : { color: 'black' }} >BADGES</Text>
                                </TouchableOpacity>

                            </View>
                            <Text style={{ fontSize: 30, fontWeight: 900 }} >|</Text>
                            <View style={{ width: '48%', alignItems: 'center', justifyContent: 'center' }} >
                                <TouchableOpacity onPress={() => {
                                    setisBandage(false)
                                }}>
                                    <Text style={!isBandage ? { color: 'red' } : { color: 'black' }} >MEMBERSHIP CARD</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
            {isBandage ? <Bandage /> : <Card />}

        </View>
    );
}

export default Profile;



const styles = StyleSheet.create({
    topContainer: {
        width: '100%',
        height: "100%",
        alignItems: 'center',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        paddingBottom: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 8,

    },
    topnav: {
        marginVertical: 10,
        alignContent: 'center',
        justifyContent: 'center',
    },
    topnavImg: {
        width: 28,
        height: 28,
        margin: 10
    },
    topnavText: {
        color: 'black',
        fontWeight: 600,
        textAlign: 'center'
    },
    optionsBvsM: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }

})