import React  from 'react'
import { Button, Container, Grid} from 'semantic-ui-react';

const ContanierMain = () =>
(
    <div className ='ContanierMain' style = {{marginTop:20}}>
        <Container>
            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column textAlign = 'center'>
                       <Button color = 'olive' size = 'massive'>    ГОСТы   </Button>
                    </Grid.Column>
                    <Grid.Column textAlign = 'center'>
                        <Button color = 'olive' size = 'massive'>Структуры отчетов</Button>
                    </Grid.Column>
                    <Grid.Column textAlign = 'center'>
                        <Button color = 'olive' size = 'massive'>Титульники</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </div>
)
export default ContanierMain;

