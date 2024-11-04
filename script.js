function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")


// pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if(html.classList.contains("light")) {
// se tiver light mode, adicionar a imagem light 
    img.setAttribute("src", "./assets/ulq-light.png")
    } else {
// se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/ulq.png")
    }
    const desc = document.querySelector("#profile img")

    if(html.classList.contains("light")) {
    img.setAttribute("alt", "Foto de Ulqiorra com a barba e o cabelo cortado e arrumado.")
    } else {
    img.setAttribute("alt", "Foto de Ulqiorra com o cabelo grande e bagunçado.")
    }
}