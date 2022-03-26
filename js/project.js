let blogs = []
function addBlog(event) {

    event.preventDefault();

    let name = document.getElementById('input-name').value
    let description = document.getElementById('input-description').value
    let image = document.getElementById('input-image').files

    image = URL.createObjectURL(image[0])

    let blog = {
        name: name,
        description: description,
        image: image,
    }

    blogs.push(blog)
    renderBlog ()

}

function renderBlog() {

    document.getElementById('projectCard').innerHTML ='';
    for (let dataBlog = 0; dataBlog < blogs.length; dataBlog++) {

        document.getElementById('projectCard').innerHTML +=
            `
        <div class="project-card">
        <div class="card-image">
            <img src=${projec[dataBlog].image} alt="ggwwp">
        </div>
        <h4 class="project-name">
            <a href="detail-project.html">${projec[dataBlog].name}</a></h4>
        <p class="durasi">durasi: 3 bulan</p>
        <p class="description">${projec[dataBlog].description}</p>
        <i class="fa-brands fa-node"></i>
        <i class="fa-brands fa-react"></i>
        <i class="fa-brands fa-connectdevelop"></i>
        <i class="fa-brands fa-js-square"></i>
        <div class="div-button-project">
            <button class="btn">edit</button>
            <button class="btn">delete</button>
        </div>
    </div>
        `
    }
}
