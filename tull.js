const colors = ['red', 'blue', 'green', 'black', 'orange', 'pink', 'purple', 'yellow', 'cyan', 'magenta']

const getRandomColor = () => {
    return colors[Math.round(Math.random()*colors.length)]
}

const imageSizes = ["100px", "200px", "75px", "50px", "25px"]

const getRandomHexcolor = () => {
    let hexString = "#";
    for (let i = 0; i < 6;  i++) {
        hexString += Math.round(Math.random()*15).toString(16).toUpperCase(); 
    }
    return hexString;
}

setInterval(() => {
    const h4Tags = document.getElementsByTagName('h4');
    for (let i = 0; i < h4Tags.length; i++) {
        h4Tags[i].style.color = getRandomHexcolor()
    }

    const h1Tags = document.querySelectorAll('h1');
    for (let i = 0; i < h1Tags.length; i++) {
        h1Tags[i].style.color = getRandomHexcolor()
    }

    const pTags = document.getElementsByTagName('p');
    for (let i = 0; i < pTags.length; i++) {
        pTags[i].style.color = getRandomHexcolor()
    }

    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        const size = imageSizes[Math.round(Math.random()*images.length)]
        images[i].style.width = size;
        images[i].style.height = size;
    }

}, 500)
