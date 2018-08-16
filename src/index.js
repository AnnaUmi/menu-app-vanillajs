
import app from './app'

const body = document.querySelector('body');
console.log(this)
body.insertBefore(app(), body.childNodes[0])