import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

let jsondata;
export default class FetchExample extends React.Component {

    constructor(props){
        super(props);
        this.state ={ data:{},
        BTC_USDTvalue:"",
        BTC_TLvalue:"",
        ETH_TLvalue:"",
        BTT_TLvalue:"",
        ADA_TLvalue:"",
        DOGE_TLvalue:"",
        PSG_TLvalue:"",

        BTC_USDTpercentChange:"",
        BTC_TLpercentChange:"",
        ETH_TLpercentChange:"",
        BTT_TLpercentChange:"",
        ADA_TLpercentChange:"",
        DOGE_TLpercentChange:"",
        PSG_TLpercentChange:"",

        percentChange:"",
        }

    }

    // make an API call in the beginning
    componentDidMount(){
        return fetch('https://www.paribu.com/ticker')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data : responseJson,
                    BTC_USDTvalue : responseJson.BTC_USDT.last,
                    BTC_USDTpercentChange : responseJson.BTC_USDT.percentChange,
                    BTC_TLvalue : responseJson.BTC_TL.last,
                    BTC_TLpercentChange : responseJson.BTC_TL.percentChange,
                    ETH_TLvalue : responseJson.ETH_TL.last,
                    ETH_TLpercentChange : responseJson.ETH_TL.percentChange,
                    BTT_TLvalue : responseJson.BTT_TL.last,
                    BTT_TLpercentChange : responseJson.BTT_TL.percentChange,
                    ADA_TLvalue : responseJson.ADA_TL.last,
                    ADA_TLpercentChange : responseJson.ADA_TL.percentChange,
                    DOGE_TLvalue : responseJson.DOGE_TL.last,
                    DOGE_TLpercentChange : responseJson.DOGE_TL.percentChange,
                    PSG_TLvalue : responseJson.PSG_TL.last,
                    PSG_TLpercentChange : responseJson.PSG_TL.percentChange,
        
                });
                console.log(responseJson.BTC_USDT.last);
              })


            .catch((error) =>{
                console.error(error);
            });
    }

    render(){
        return(
            <View style={styles.container} >
              <View style={styles.bitcoinView}>
                <Text style={styles.bitcoinText} >SEMBOL |  SON FİYAT  |  DEĞİŞİM%</Text>
                
                </View>
              <View style={styles.bitcoinView}>
                <Text style={styles.bitcoinText} >BTC_USDT |  {this.state.BTC_USDTvalue}  |  %{this.state.BTC_USDTpercentChange}</Text>
                
                </View>
                <View style={styles.bitcoinView}>
                <Text style={styles.bitcoinText}>BTC_TL  |  {this.state.BTC_TLvalue}  |  %{this.state.BTC_TLpercentChange}</Text>
                
                </View>
                <View style={styles.bitcoinView}>
                <Text style={styles.bitcoinText}>ETH_TL |  {this.state.ETH_TLvalue}  |  %{this.state.ETH_TLpercentChange}</Text>
            
                </View>
                <View style={styles.bitcoinView}>
                <Text style={styles.bitcoinText}>BTT_TL |  {this.state.BTT_TLvalue}  |  %{this.state.BTT_TLpercentChange}</Text>
            
                </View>
                

                <View style={styles.bitcoinView}>
                <Text style={styles.bitcoinText}>ADA_TL |  {this.state.ADA_TLvalue}  |  %{this.state.ADA_TLpercentChange}</Text>
            
                </View>

                <View style={styles.bitcoinView}>
                <Text style={styles.bitcoinText}>DOGE_TL |  {this.state.DOGE_TLvalue}  |  %{this.state.DOGE_TLpercentChange}</Text>
            
                </View>

                <View style={styles.bitcoinView}>
                <Text style={styles.bitcoinText}>PSG_TL |  {this.state.PSG_TLvalue}  |  %{this.state.PSG_TLpercentChange}</Text>
            
                </View>

                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#33506d',
      //alignItems: 'center',
      justifyContent: "center",
      //position:"relative",
      //padding:20,
  
    },
  
    bitcoinView: {
      //width: "100%",
      backgroundColor: "#1e2c3d",
      borderRadius: 25,
      //height: 50,
      borderColor: "#0c0c0c",
      borderWidth: 2,
      borderStyle: "dashed",
      //marginBottom: 260,
      //paddingRight: 10,
      //flexDirection:"column",
      alignItems: "center",
      //paddingTop:14,
      //paddingHorizontal:24.5,
      marginTop: 8,
      padding: 15,
      paddingBottom: 18,
      paddingTop: 18,
  
  
    },
    bitcoinText: {
  
      color: "white",
  
      //paddingTop: 2,
      //paddingBottom: 2,
      //marginBottom: 2,
      //marginTop:1,
      fontSize: 15,
      //lineHeight: 30,
      //marginRight:10,
      //paddingLeft:1,
      textAlign: "left",
  
    },
      
  
  })
  