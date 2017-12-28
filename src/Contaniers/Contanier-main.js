import React, {Component}  from 'react';
import Headers from './Header/Header';
import { Button, Container, Grid} from 'semantic-ui-react';

class ContanierMain extends Component
{
    constructor(props){
        super(props);
        this.state ={
            count: this.props.value
        };
    }   
    
    Change() {
        this.setState({
            count: this.state.count = true
        });
    }
    render(){
        return(
    <div className ='ContanierMain' style = {{marginTop:20}}>
        <Container>
            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column textAlign = 'center'>
                       <Button color = 'olive' size = 'massive' value = {false} onClick = {this.Change.bind(this)} >    ГОСТы   </Button>
                    </Grid.Column>
                    <Grid.Column textAlign = 'center'>
                        <Button color = 'olive' size = 'massive' value = {false}>Структуры отчетов</Button>
                    </Grid.Column>
                    <Grid.Column textAlign = 'center'>
                        <Button color = 'olive' size = 'massive' value = {false}>Титульники</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </div>);   
    if (this.state.count) {
     return(  <p>dfjvhsiubvisdbvisdb</p>);
    }
    }
}
export default ContanierMain;

