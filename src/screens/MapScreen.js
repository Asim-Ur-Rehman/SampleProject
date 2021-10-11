
import React, { useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
    Image
} from 'react-native';
import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";
import Pie from 'react-native-pie';
import PieScreen from '../screens/pie'

const MapScreen = () => {



    const INITIAL_REGION = {
        latitude: 52.5,
        longitude: 19.2,
        latitudeDelta: 8.5,
        longitudeDelta: 8.5,
    };

    return (





        <MapView
            initialRegion={INITIAL_REGION}
            style={{ flex: 1, }}

            // clusterColor='red'
            // onClusterPress={() => alert('helo')}
            renderCluster={cluster => {
                const { id, geometry, onPress, properties, } = cluster;
                // console.log('cluster data', cluster)
                const points = properties.point_count;
                return (

                    <Marker
                        key={`cluster-${id}`}
                        coordinate={{
                            longitude: geometry.coordinates[0],
                            latitude: geometry.coordinates[1]
                        }}
                        onPress={onPress}

                    >

                        <View style={{
                            // backgroundColor: 'green',
                            width: 80,
                            height: 80,
                            alignItems: 'center',
                            justifyContent: 'center',

                        }}>

                            <View style={{ backgroundColor: 'white', }}>

                                <Image source={require('../assets/Pie.png')} style={{ width: 80, height: 80, }} />
                                {/* <Pie

                                    radius={40}
                                    innerRadius={30}
                                    sections={[
                                        {
                                            percentage: 60,
                                            color: 'red',
                                        },
                                        {
                                            percentage: 20,
                                            color: 'blue',
                                        },
                                        {
                                            percentage: 10,
                                            color: 'yellow',
                                        },
                                        {
                                            percentage: 10,
                                            color: 'green',
                                        },
                                    ]}
                                /> */}


                            </View>
                            <View style={{ position: 'absolute', }}>
                                <Text style={{
                                    color: 'red'
                                }}>{points}</Text>
                            </View>




                        </View>

                        {/* <View style={{ padding: 16, backgroundColor: "white", backgroundColor: cluster.clusterColor }}>
                            <Text>{points}</Text>
                        </View> */}

                    </Marker>

                );
            }}

        >
            <Marker coordinate={{ latitude: 52.0, longitude: 18.2 }} title={'User1'} description={'Hello User1'} >
                <Image source={require('../assets/user.png')} style={{ width: 50, height: 50 }} resizeMode={'contain'} />
            </Marker>
            <Marker coordinate={{ latitude: 52.2, longitude: 18.3 }} title={'User2'} description={'Hello User2'} >

                <Image source={require('../assets/user.png')} style={{ width: 50, height: 50 }} resizeMode={'contain'} />
            </Marker>
            <Marker coordinate={{ latitude: 52.6, longitude: 18.3 }} title={'User3'} description={'Hello User3'} >

                <Image source={require('../assets/user.png')} style={{ width: 50, height: 50 }} resizeMode={'contain'} />
            </Marker>
            <Marker coordinate={{ latitude: 51.6, longitude: 18.0 }} title={'User4'} description={'Hello User4'} >

                <Image source={require('../assets/user.png')} style={{ width: 50, height: 50 }} resizeMode={'contain'} />
            </Marker>
            <Marker coordinate={{ latitude: 53.1, longitude: 18.8 }} title={'User5'} description={'Hello User5'} >


                <Image source={require('../assets/user.png')} style={{ width: 50, height: 50 }} resizeMode={'contain'} />
            </Marker>
            <Marker coordinate={{ latitude: 52.9, longitude: 19.4 }} title={'User6'} description={'Hello User6'} >

                <Image source={require('../assets/user.png')} style={{ width: 50, height: 50 }} resizeMode={'contain'} />
            </Marker>
            <Marker coordinate={{ latitude: 52.2, longitude: 21 }} title={'User7'} description={'Hello User7'} >

                <Image source={require('../assets/user.png')} style={{ width: 50, height: 50 }} resizeMode={'contain'} />

            </Marker>
            <Marker coordinate={{ latitude: 52.4, longitude: 21 }} title={'User8'} description={'Hello User8'} >

                <Image source={require('../assets/user.png')} style={{ width: 50, height: 50 }} resizeMode={'contain'} />

            </Marker>
            <Marker coordinate={{ latitude: 51.8, longitude: 20 }} title={'User9'} description={'Hello User9'} >


                <Image source={require('../assets/user.png')} style={{ width: 50, height: 50 }} resizeMode={'contain'} />
            </Marker>


            <Marker coordinate={{ latitude: 54.8, longitude: 22 }} title={'User10'} description={'Hello User10'}  >

                <Image source={require('../assets/user.png')} style={{ width: 50, height: 50 }} resizeMode={'contain'} />
            </Marker>

        </MapView>

    )
}

export default MapScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});
