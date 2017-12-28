
import React, { Component } from 'react';
import {Checkbox, Form} from 'semantic-ui-react';
class Element extends Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
      }
        handleChange = (e, { value }) => this.setState({ value })
    render()
    {
        return(
    <div>
        <Form.Field>
        <Checkbox radio  label  = {this.props.label1}
                value = {this.props.label1}
                checked={this.state.value === this.props.label1}
                onChange={this.handleChange}
                >
                </Checkbox>
        </Form.Field>
        <Form.Field>
        <Checkbox radio  label = {this.props.label2}
                value = {this.props.label2}                          
                checked={this.state.value === this.props.label2}
                onChange={this.handleChange}
                >
                </Checkbox>
        </Form.Field>
        <Form.Field>
        <Checkbox radio label = {this.props.label3}
                value = {this.props.label3}                          
                checked={this.state.value === this.props.label3}
                onChange={this.handleChange}
                >
                </Checkbox>
        </Form.Field>
        </div>
        );
    }
}
export default Element;