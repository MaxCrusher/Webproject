import React, { Component } from 'react';
import { Button, Image, Grid} from 'semantic-ui-react';
import './Header.css';

class Headers extends Component {
    render() {
        return (
            <div>
                <header className='Head'>
                    <Grid columns = {2}>
                        <Grid.Row  fluid = 'width'>
                           <Grid.Column>
                               <a href = "https://www.google.ru/">
                                <Image src = 'Image/logo1.jpg'
                                       height = {50}
                                       width = {150}>
                                </Image>
                                </a>
                            </Grid.Column>
                            <Grid.Column textAlign = 'right'>
                                <p className = 'ps'>
                                     Я преподаватель
                                    <Button className = 'Button1' color = 'olive'>
                                       Вход
                                    </Button>
                                    <Button className = 'Button1' color = 'olive'>
                                        Регистрация
                                    </Button>
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </header>
            </div>
        );
    }
}

export default Headers;