import React, { Component } from 'react';
import { Button } from 'antd';
import './style/index.less';

class DefineButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<Button {...this.props} type="primary"><span>{this.props.children}</span></Button>);
    }
}

DefineButton.propTypes = {};

export default DefineButton; //这里必须export default导出
