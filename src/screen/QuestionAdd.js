import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Textarea, Container, Header, Content, Form, Item, Input, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
export default class QuestionAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ width: '100%', height: '50%', alignItems: 'center' }}>
                    <Text style={{ fontSize: 22, alignSelf: 'center', marginBottom: 15 }}>Sorunuz</Text>
                    <View style={styles.textAreaContainer} >
                        <TextInput
                            multiline={true}
                            numberOfLines={4}
                            maxLength={200}
                            placeholder={"Soru içeriğini yazınız..."}
                            style={{ height: 'auto', textAlignVertical: 'top', fontSize: 14 }} />
                    </View>
                    <View style={{
                        shadowColor: 'rgba(46, 229, 157, 0.4)',
                        shadowOpacity: 1.5,
                        elevation: 8,
                        shadowRadius: 20,
                        shadowOffset: { width: 1, height: 8 }, borderRadius: 7, width: '80%', height: '15%', marginTop: 20, justifyContent: 'center', backgroundColor: '#0a60ff'
                    }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18, color: 'white' }}>Gönder</Text>
                            <Icon
                                style={{ paddingLeft: 15, color: 'white' }}
                                name="ios-share-alt"
                                size={22}
                            />
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    textAreaContainer: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
        width: '80%',
        borderRadius: 7,
        borderRightColor: '#0a60ff', borderRightWidth: 2
    },
    textArea: {
        justifyContent: "flex-start"
    }
})