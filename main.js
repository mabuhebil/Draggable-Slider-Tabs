const ul = document.querySelector('.container ul')


const draging = (e) => {
    ul.scrollLeft -= e.movementX;
}

ul.addEventListener('mousemove', draging)