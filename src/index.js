import buildPage from './pageBuilder';
import './style.css';


let parentElement = document.createElement("div");

buildPage(parentElement);

document.body.appendChild(parentElement);