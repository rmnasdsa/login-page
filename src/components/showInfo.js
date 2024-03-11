
const showInfo = () => {

  const root = document.querySelectorAll('.root');
  const container = document.createElement('div');
  container.className = 'information-container';
  root[1].append(container);
  const header = document.createElement('div');
  header.className = 'header';
  container.append(header);
  const headerTitle = document.createElement('h1');
  headerTitle.innerText = 'Information';
  header.append(headerTitle);
  const main = document.createElement('div');
  main.className = 'main';
  container.append(main);
  const username = document.createElement('h3');
  username.className = 'username-value';
  main.append(username);
  const ageValue = document.createElement('h3');
  ageValue.className = 'age-value';
  main.append(ageValue);
}
export default showInfo;