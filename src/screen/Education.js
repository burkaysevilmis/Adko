import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';


export default class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const veri = [];
        for (let index = 1; index < 20; index++) {
            veri.push(
                <View style={{ marginTop: 20, width: '100%', height: 'auto', alignItems: 'center' }}>
                    <View style={{ width: '80%', height: 45, backgroundColor: '#2CC3D9', justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('EducationDetail')}>
                            <Text style={{ color: 'white', fontSize: 15 }}>{index}. INDOMIE ÜRÜN EĞİTİM</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ marginTop: '10%', width: '90%', shadowOffset: { width: 10, height: 10 } }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25 }}>EĞİTİMLER</Text>
                    </View>

                    <ScrollView>
                        {veri}
                    </ScrollView>

                </View>
            </View>
        );
    }
}
