export default {
    createPath(points) {
        let {m1, l1, m2, l2, id} = points;
        let d = `M${m1} L${l1} Z M${m2} L${l2} Z` 
        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d);
        path.setAttribute('stroke', 'rgb(0,0,0)');
        path.setAttribute('stroke-width', '1');
        path.setAttribute('id', id);
        return path;
    },
    calcNavItems(fn) {
        console.log('fn', fn)
        let currentPath = this.$router.history.current.path
        let currentRouteName = this.$router.history.current.name
        let routePathObjects = [
          {
            path: '/',
            text: 'Home',
            m1: '5000 3000',
            l1: '4000 3500',
            m2: '4000 3500',
            l2: '3000 3500',
            id: `${currentRouteName}-line-1`
          },
          {
            path: '/portfolio',
            text: 'Portfolio',
            m1: '6000 4000',
            l1: '5000 4500',
            m2: '5000 4500',
            l2: '4000 4500',
            id: `${currentRouteName}-line-2`
          },
          {
            path: '/philosophy',
            text: 'Philosophy',
            m1: '7000 5000',
            l1: '6000 5500',
            m2: '6000 5500',
            l2: '5000 5500',
            id: `${currentRouteName}-line-3`
          },
          {
            path: '/contact',
            text: 'Contact',
            m1: '8000 6000',
            l1: '7000 6500',
            m2: '7000 6500',
            l2: '6000 6500',
            id: `${currentRouteName}-line-4`
          }
        ]
        let mysvg = document.getElementById('mysvg')
        let NS = mysvg.getAttribute('xmlns')
        let leftLine = document.getElementById('topleft-bottomright')
        let dimensions = leftLine.getBoundingClientRect();
        routePathObjects.forEach( pathObj => {
          let newPath = createPath(pathObj)
          mysvg.appendChild(newPath)
          let line = document.getElementById(pathObj.id)
          let lineDimensions = line.getBoundingClientRect();
          let newRow = document.createElement('span')
          newRow.setAttribute("value", pathObj.path)
          let innerText = document.createTextNode(pathObj.text)
          newRow.appendChild(innerText)
          newRow.classList.add('nav-item')
          newRow.style.top = lineDimensions.y - 150 - 10 + 'px';
          newRow.style.left = lineDimensions.x - 25 + 'px'
          newRow.addEventListener('click', this.navToRoute)
    
          let mainContainer = document.getElementById(this.mainContainerId)
          mainContainer.appendChild(newRow)
        })   
    }
}