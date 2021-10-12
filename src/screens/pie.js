import React from 'react'
import { View, Text } from 'react-native'
import Pie from 'react-native-pie';


const pie = () => {
    return (






        <View style={{
            // backgroundColor: 'green',
            width: 80,
            height: 80,
            // alignItems: 'center',
            // justifyContent: 'center',

        }}>

            <View style={{ backgroundColor: 'black', }}>

                {/* <Image source={require('../assets/Pie.png')} style={{ width: 80, height: 80, }} /> */}
                <Pie
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
                />


            </View>
            {/* <View style={{ position: 'absolute', }}>
                <Text style={{
                    color: 'red'
                }}>{points}</Text>
            </View> */}




        </View>

    )
}

export default pie
