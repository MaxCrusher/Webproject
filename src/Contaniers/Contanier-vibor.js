import React, {Component} from 'react';
import {Checkbox, Form} from 'semantic-ui-react';
import './Container-vibor.css';
import Check from './Check.js';
import Element from './Element.js'

class ContainerVibor extends Component
{
    render()
    {
    return(
        <div>
            <Element lable1= 'РГР' lable2= 'КП' lable3= 'ВКР'/>
            
        </div>
    );
    }
}
export default ContainerVibor;