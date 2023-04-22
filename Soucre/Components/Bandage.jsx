import { View, Text, Image, StyleSheet } from 'react-native';

export default function Bandage() {
    return (<View>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}} >
            <View style={styles.band}>
                <Image source={require('../Images/bandage1.png')} style={styles.img} />
                <Text style={styles.bandName}>Digital Devotee</Text>
            </View>
            <View style={styles.band}>
                <Image source={require('../Images/bandage2.png')} style={styles.img} />
                <Text style={styles.bandName}>Pickup Master</Text>
            </View>
            <View style={styles.band}>
                <Image source={require('../Images/bandage3.png')} style={styles.img} />
                <Text style={styles.bandName}>Flavor Finder</Text>
            </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
            <View style={styles.band}>
                <Image source={require('../Images/bandage4.png')} style={styles.img} />
                <Text style={styles.bandName}>Foodie</Text>
            </View>
            <View style={styles.band}>
                <Image source={require('../Images/bandage5.png')} style={styles.img} />
                <Text style={styles.bandName}>Follow Fan</Text>
            </View>
            <View style={styles.band}>
                <Image source={require('../Images/bandage6.png')} style={styles.img} />
                <Text style={styles.bandName}>Delivery Pro</Text>
            </View>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100
    },
    bandName: {
        color: 'black',
        textAlign: 'center',
        fontWeight:600
    },
    band: {
        margin: 5,
        marginHorizontal: 10,
        alignItems:'center'
    }
})