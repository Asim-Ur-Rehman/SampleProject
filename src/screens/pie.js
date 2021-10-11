import React from 'react'
import { View, Text } from 'react-native'
import Pie from 'react-native-pie';


const pie = () => {
    return (

        <View style={{
            // backgroundColor: 'green',
            // flex: 1,
            width: 80,
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',

        }}>

            <View style={{ backgroundColor: 'white', }}>
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
                    strokeCap={'butt'}
                />
            </View>
            <View style={{ position: 'absolute', }}>
                <Text style={{
                    color: 'red'
                }}>10</Text>
            </View>




        </View>


    )
}

export default pie
