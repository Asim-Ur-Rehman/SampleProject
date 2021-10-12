
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
    Image,
    ImageBackground
} from 'react-native';
import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";
import Pie from 'react-native-pie';
import { VictoryPie } from 'victory-native'
const MapScreen = () => {



    const INITIAL_REGION = {
        latitude: 52.5,
        longitude: 19.2,
        latitudeDelta: 8.5,
        longitudeDelta: 8.5,
    };


    const allMarkers = [
        {
            latitude: 52.0,
            longitude: 18.2,
            title: 'User1',
            description: 'HelloUser1',
            image: require('../assets/user.png'),

        },
        {
            latitude: 52.2,
            longitude: 18.2,
            title: 'User2',
            description: 'HelloUser2',
            image: require('../assets/user.png'),

        },
        {
            latitude: 52.6,
            longitude: 18.3,
            title: 'User3',
            description: 'HelloUser3',
            image: require('../assets/user.png'),

        },
        {
            latitude: 51.6,
            longitude: 18.0,
            title: 'User4',
            description: 'HelloUser4',
            image: require('../assets/user.png'),

        },
        {
            latitude: 53.1,
            longitude: 18.8,
            title: 'User5',
            description: 'HelloUser5',
            image: require('../assets/user.png'),

        },
        {
            latitude: 52.9,
            longitude: 19.4,
            title: 'User6',
            description: 'HelloUser6',
            image: require('../assets/user.png'),

        },
        {
            latitude: 52.2,
            longitude: 21,
            title: 'User7',
            description: 'HelloUser7',
            image: require('../assets/user.png'),

        },
        {
            latitude: 52.4,
            longitude: 21,
            title: 'User8',
            description: 'HelloUser8',
            image: require('../assets/user.png'),

        },
        {
            latitude: 51.8,
            longitude: 20,
            title: 'User9',
            description: 'HelloUser9',
            image: require('../assets/user.png'),

        },
        {
            latitude: 54.8,
            longitude: 22,
            title: 'User10',
            description: 'HelloUser10',
            image: require('../assets/user.png'),

        },
    ]

    return (





        <MapView
            initialRegion={INITIAL_REGION}
            style={{ flex: 1 }}
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
                            // width: 80,
                            // height: 80,
                        }}>
                            {/* <View style={{ backgroundColor: '#fff' }}>
                                <VictoryPie
                                    padAngle={({ datum }) => datum.y}
                                    innerRadius={100}
                                    data={[
                                        { x: 1, y: 2 },
                                        { x: 2, y: 3, label: "two" },
                                        { x: 3, y: 5 }
                                    ]}
                                    />
                            </View>
                            <View style={{ position: 'absolute', top: 30, left: 30}}>
                                <Text style={{
                                    color: 'red'
                                }}>{points}</Text>
                            </View> */}
                            <VictoryPie
                                colorScale={['red', 'green', 'yellow']}
                                padAngle={({ datum }) => datum.y}
                                innerRadius={100}
                                data={[
                                    { x: 1, y: 2 },
                                    { x: 2, y: 3, label: "two" },
                                    { x: 3, y: 3 }
                                ]}
                            />
                        </View>
                    </Marker>

                );
            }}

        >


            {
                allMarkers.map((item, i) => {
                    return (
                        <Marker key={i} coordinate={{ latitude: item.latitude, longitude: item.longitude }} title={item.title} description={item.description} >
                            <Image source={item.image} style={{ width: 50, height: 50 }} resizeMode={'contain'} />
                        </Marker>
                    )
                })
            }



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
