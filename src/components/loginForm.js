import { root } from "../app.js";
const loginForm = () => { 

  const headerTitle = document.createElement('h1');
  root.append(headerTitle);
  headerTitle.className = 'header-title';
  headerTitle.innerText = 'Login';
};
export default loginForm;