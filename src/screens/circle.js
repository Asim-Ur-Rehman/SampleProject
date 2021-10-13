import React from 'react'
import { View, Text } from 'react-native'

const circle = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff'
        }}>
            <View style={{
                width: '57%',
                height: 200,
                // backgroundColor: 'green',
                borderRadius: 100,
                overflow: 'hidden',
                // alignItems: 'center',
                // justifyContent: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between'


            }}>
                <View style={{
                    // backgroundColor: 'red',
                    height: 200,
                    width: '50%'


                }}>
                    <View style={{
                        backgroundColor: 'green',
                        height: 100
                    }}>

                    </View>
                    <View style={{
                        backgroundColor: 'yellow',
                        height: 100
                    }}>

                    </View>


                </View>
                <View style={{
                    // backgroundColor: 'pink',
                    height: 200,
                    width: '50%'
                }}>

                    <View style={{
                        backgroundColor: 'black',
                        height: 100
                    }}>

                    </View>
                    <View style={{
                        backgroundColor: 'tomato',
                        height: 100
                    }}>

                    </View>
                </View>

            </View>
        </View>
    )
}

export default circle
