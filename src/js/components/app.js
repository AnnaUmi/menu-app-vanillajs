import {div, addId, text } from '../builders'

export default function app(){
    const appEle = addId(div(text('Anna I love u')), 'app-container');
    return appEle;
}