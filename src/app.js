import React from 'react';
import ReactDOM from 'react-dom';

// 自定义的组件
import DefineButton from './components/DefineButton/index';

class App extends React.Component {

    render() {
        return (<div><DefineButton title='这是按钮的提示'>这是一个按钮</DefineButton></div>);
    }

}

ReactDOM.render(<App />, document.getElementById('app')); //app即为挂载点，在模板html中。
