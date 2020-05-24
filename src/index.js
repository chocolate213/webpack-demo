import _ from 'lodash';
import printMe from './print'

function component() {
    var element = document.createElement('div');

    // Lodash，现在通过 script 标签导入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    var btn = document.createElement('button');

    btn.innerHTML = 'Click me and check the console!'
    btn.onclick = printMe

    element.appendChild(btn)

    return element
}

document.body.appendChild(component());