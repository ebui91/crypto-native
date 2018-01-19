import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { images } from '../utils/CoinIcons';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 20,
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 3,
        padding: 20
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 15
    },
    upperLeftRow: {
      width: '50%',
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold",
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20
    },
    seperator: {
        marginTop: 10,
    },
    coinPrice: {
        fontWeight: "bold",
    },
    image: {
        width: 35,
        height: 35,
    },
    moneySymbol: {
        marginTop: 10,
        marginLeft: 20,
        fontWeight: "bold",
    },
    statisticsContainer: {
        display: "flex",
        borderTopColor: "#FAFAFA",
        borderTopWidth: 2,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    percentChangePlus: {
        color: "#00BFA5",
        fontWeight: "bold",
        marginLeft: 5
    },
    percentChangeMinus: {
        color: "#DD2C00",
        fontWeight: "bold",
        marginLeft: 5
    }
})

const {
    container,
    image,
    moneySymbol,
    upperRow,
    upperLeftRow,
    coinSymbol,
    coinName,
    coinPrice,
    statisticsContainer,
    seperator,
    percentChangePlus,
    percentChangeMinus
} = styles;

const CoinCard = ({ symbol, coin_name, price_usd, percent_change_24h, percent_change_7d })=> {


    return (
        <View style={container}>

            <View style={upperRow}>
                <View style={upperLeftRow}>
                  <Image
                      style={styles.image}
                      source={{ uri: images[symbol] }}
                  />
                  <Text style={coinSymbol}>{symbol}</Text>
                  <Text style={seperator}>|</Text>
                  <Text style={coinName}>{coin_name}</Text>
                </View>

                <View style={upperLeftRow}>
                  <Text style={moneySymbol}> $
                    <Text style={coinPrice}>{price_usd}</Text>
                  </Text>
                </View>
            </View>

            <View style={statisticsContainer}>

                <Text>24h:
                     <Text style={percent_change_24h < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_24h} % </Text>
                </Text>
                <Text>7d:
                    <Text style={percent_change_7d < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_7d} % </Text>
                </Text>

            </View>

        </View>
    );
}



export default CoinCard;
