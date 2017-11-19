import React, { Component } from 'react'
import {View, Text, Image, StyleSheet, Button, Alert} from 'react-native'

class EventScreen extends Component {
    static propTypes = {};

    state = {
        modalVisible: false,
    }

    setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
    }

    render() {
        const {event} = this.props
        return (
            <View>
                <Image source = {{uri: 'http://lorempixel.com/400/200/technics/'}}
                    style = {styles.image}
                />

                <Text>{event.title}</Text>
                <Text>{event.where}</Text>
                <Text>{event.url}</Text>

                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => { Alert.alert('You tapped the button 2!')}}
                        title="Press Me"
                    />
                </View>



            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 200
    },
    buttonContainer: {
        height: 100,
        margin: 20
    }

})

export default EventScreen