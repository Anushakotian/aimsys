import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    Container,
    Header,
    Content,
    ListItem,
    Radio,
    Card,
    Text,
    Button,
    CardItem
} from 'native-base';

class Medicine extends Component {
    constructor() {
        super();
        this.state = {
            itemSelected: 'itemOne',
        };
    }
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Card>
                        <CardItem>
                            <Text>Do you have Medicine Kit?</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={styles.textStyle}>Yes:</Text>
                            <Radio 
                            // eslint-disable-next-line max-len
                            onPress={() => this.setState({ itemSelected: 'itemOne', isHidden: false })
                            }
                                selected={this.state.itemSelected === 'itemOne'}
                            />
                            <Text style={styles.textStyle}>No:</Text>
                            <Radio 
                            // eslint-disable-next-line max-len
                            onPress={() => this.setState({ itemSelected: 'itemTwo', isHidden: true })}

                                selected={this.state.itemSelected === 'itemTwo'}
                            />
                        </CardItem>

                        <ListItem>
                            <Button block warning>
                                <Text>Warning</Text>
                            </Button>
                        </ListItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        padding: 10
    }
});

export { Medicine };
