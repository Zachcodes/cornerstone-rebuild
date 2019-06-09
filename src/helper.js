export default {
  createPath(points) {
    let { m1, l1, m2, l2, id } = points;
    let d = `M${m1} L${l1} Z M${m2} L${l2} Z`;
    // let d = `M${m1} L${l1} Z`;
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', d);
    path.setAttribute('stroke', 'rgb(0,0,0)');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('id', id);
    return path;
  },
  calcNavItems(createPath, navToRoute) {
    let currentPath = this.$router.history.current.path;
    let currentRouteName = this.$router.history.current.name;
    // rise/run of left line
    // -1/2

    let routePathObjects = [
      {
        path: '/',
        text: 'Home',
        m1: '336 363',
        l1: '186 363',
        m2: '336 363',
        l2: '396 303',
        id: `${currentRouteName}-line-1`
      },
      {
        path: '/portfolio',
        text: 'Portfolio',
        m1: '386 463',
        l1: '236 463',
        m2: '386 463',
        l2: '446 403',
        id: `${currentRouteName}-line-2`
      },
      {
        path: '/philosophy',
        text: 'Philosophy',
        m1: '436 563',
        l1: '286 563',
        m2: '436 563',
        l2: '496 513',
        id: `${currentRouteName}-line-3`
      },
      {
        path: '/contact',
        text: 'Contact',
        m1: '486 663',
        l1: '336 663',
        m2: '486 663',
        l2: '546 613',
        id: `${currentRouteName}-line-4`
      }
    ];
    let mysvg = document.getElementById('mysvg');
    let leftLine = document.getElementById('topleft-bottomright');
    let dimensions = leftLine.getBoundingClientRect();
    // console.log(leftLine.getScreenCTM().inverse());
    // console.log('dimensions of left line', dimensions);
    // console.log('left line', leftLine.points);
    routePathObjects.forEach(pathObj => {
      let newPath = createPath(pathObj);
      mysvg.appendChild(newPath);
      let line = document.getElementById(pathObj.id);
      let lineDimensions = line.getBoundingClientRect();
      // console.log('lineDimensions', lineDimensions);
      let newRow = document.createElement('span');
      newRow.setAttribute('value', pathObj.path);
      let innerText = document.createTextNode(pathObj.text);
      newRow.appendChild(innerText);
      newRow.classList.add('nav-item');
      if (currentPath === pathObj.path) newRow.classList.add('nav-item-active');
      newRow.style.top = lineDimensions.y - 5 + 'px';
      newRow.style.left = lineDimensions.x - 30 + 'px';
      newRow.addEventListener('click', navToRoute);

      let mainContainer = document.getElementById(this.mainContainerId);
      mainContainer.appendChild(newRow);
    });
  },
  navToRoute(e) {
    let route = e.target.getAttribute('value');
    this.$router.push(route);
  }
};
