
    let container = document.querySelector('#container');
    URLarticulos = 'assets/data/articulos.json';

    const getArticulos = async () => {

        const response = await fetch(URLarticulos);
        const data = await response.json();
        return data;

    }

    getArticulos().then((res) => {

        res.map(articulo => {

            container.innerHTML += `
    
                <a href="${articulo.link}" class="seccion-4__grid__item">
    
                    <div class="seccion-4__grid__item__img">
                        <div class="seccion-4__grid__item__img__filtro"></div>
                        <img src=${articulo.img} alt=${articulo.titulo} />
                    </div>

                    <h4 class="seccion-4__grid__item__titulo">${articulo.titulo}</h4>
    
                </a>
    
            `;

        })


    });