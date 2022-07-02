const container = document.querySelector('.container')
const NUMBER_OF_IMAGES = 5

const onImageContainerClickHandler = (e) => {
    const current = document.querySelector('.selected')
    const clicked = e.currentTarget

    if (current === clicked) return

    current.classList.remove('selected')
    clicked.classList.add('selected')
}

for (let i = 0; i < NUMBER_OF_IMAGES; i++) {
    const imageContainer = document.createElement('div')
    const image = document.createElement('img')

    imageContainer.classList.add('imageContainer')
    if (i === 0) imageContainer.classList.add('selected')

    imageContainer.addEventListener('click', onImageContainerClickHandler)

    image.src = `/assets/img${i + 1}.jpg`
    image.alt = `Image ${i + 1}`
    imageContainer.appendChild(image)
    container.appendChild(imageContainer)
}

