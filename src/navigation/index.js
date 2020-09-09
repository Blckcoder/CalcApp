import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Navigation extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Navigation</Text>
            </View>
        );
    }
}
export default Navigation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});