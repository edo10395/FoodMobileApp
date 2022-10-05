import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FoodDummy6, IcBackWhite } from '../../assets';
import { Button, Counter, Rating } from '../../components';

const FoodDetail = ({ navigation }) => {
    return (
        <View style={styles.page}>
            {/* jika ada image yg didalamnya ada content maka gunakan komponen ini */}
            <ImageBackground source={FoodDummy6} style={styles.cover}>
                <Pressable
                    android_ripple={{
                        color: 'rgb(224, 224, 224)',
                        borderless: false,
                        foreground: true
                    }}
                    style={styles.back}
                >
                    <IcBackWhite />
                </Pressable>
            </ImageBackground>

            {/* Content */}
            <View style={styles.content}>

                <View style={styles.mainContent}>
                    <View style={styles.productContainer}>
                        <View>
                            <Text style={styles.title}>Cherry Healthy</Text>
                            <Rating />
                        </View>
                        <Counter />
                    </View>

                    <Text style={styles.description}>
                        Makanan khas Bandung yang cukup sering
                        dipesan oleh anak muda dengan pola makan
                        yang cukup tinggi dengan mengutamakan
                        diet yang sehat dan teratur.
                    </Text>
                    <Text style={styles.label}>Ingredients:</Text>
                    <Text style={styles.description}>Seledri, telur, blueberry, madu.</Text>
                </View>

                <View style={styles.footer}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.labelTotal}>Total Price:</Text>
                        <Text style={styles.labelPrice}>IDR 12.289.000</Text>
                    </View>
                    <View style={styles.button}>
                        <Button text="Order Now" onPress={() => navigation.navigate('OrderSummary')} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FoodDetail

const styles = StyleSheet.create({
    page: {
        flex: 1
    },

    cover: {
        height: 330,
        paddingTop: 26,
        paddingLeft: 22
    },
    back: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    productContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14
    },
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        marginBottom: 4
    },

    description: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3',
        marginBottom: 16
    },
    title: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#020202'

    },
    content: {
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: -20,
        paddingTop: 26,
        paddingHorizontal: 16,
        flex: 1
    },
    mainContent: {
        flex: 1
    },
    footer: {
        flexDirection: 'row',
        paddingVertical: 16,
        alignItems: 'center'
    },
    priceContainer: {
        flex: 1
    },
    button: {
        width: 163
    },
    labelTotal: {
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3'
    },
    labelPrice: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        color: '#020202'
    }
})