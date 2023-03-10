import buildPage from './pageBuilder';
import './style.css';


let parentElement = document.createElement("div");
parentElement.id = "content";

buildPage(parentElement);

document.body.appendChild(parentElement);