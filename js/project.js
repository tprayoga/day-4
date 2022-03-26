let projects =[]
console.log( 'data',projects);

function addProject(event) {
    event.preventDefault()

    let name = document.getElementById('input-name').value
    let description = document.getElementById('input-description').value
    let image = document.getElementById('input-image').files

    image = URL.createObjectURL(image[0])

    let project = {
        name: name,
        description: description,
        image: image,
    }

    projects.push(project)
    console.log(projects);

    renderProject()
}

function renderProject() {

    document.getElementById('project-list').innerHTML = ''
    
    for (let dataProject = 0; dataProject < projects.length; dataProject++) {
        document.getElementById('project-list').innerHTML +=
        `
        <div class="project-card">
        <div class="card-image">
            <img src=${projects[dataProject].image} alt="ggwwp">
        </div>
        <h4 class="project-name">
            <a href="detail-project.html">${projects[dataProject].name}</a>
        </h4>
        <p class="durasi">durasi: 3 bulan</p>
        <p class="description">${projects[dataProject].description}</p>
        <i class="fa-brands fa-node"></i>
        <i class="fa-brands fa-react"></i>
        <i class="fa-brands fa-connectdevelop"></i>
        <i class="fa-brands fa-js-square"></i>
        <div class="div-button-project">
            <button class="btn-aksi">edit</button>
            <button class="btn-aksi">delete</button>
        </div>
    </div>
    `
    }
}