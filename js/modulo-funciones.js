function adicionarReg(campo1, campo2,campo3){
    return fetch('http://localhost:3000/almacenamiento',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({campo1, campo2,campo3})
    });
}

function actualizarReg (campo1, campo2,campo3,id){
    return fetch(`http://localhost:3000/almacenamiento/${id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({campo1, campo2,campo3})
    });
}

function eliminarReg(id){
    return fetch(`http://localhost:3000/almacenamiento/${id}`,{
        method: 'DELETE'
    });
}

function obtenerDB (){
    return fetch('http://localhost:3000/almacenamiento').then(resp=>resp.json());
}

function mostrarEnWeb (c1,c2,c3,id){
    const linea = document.createElement('tr');
    const plantilla = ` <td>${c1}</td>
    <td>${c2}</td>
    <td>${c3}</td>
    <td>
        <ul>
            <li><button data-mod data-id="${id}">modificar</button></li>
            <li><button data-elim >eliminar</button></li>
        </ul>
    </td>`;
    linea.innerHTML=plantilla;

    const btnMod = linea.querySelector('[data-mod]');
    btnMod.addEventListener('click', (acc)=>{
        acc.preventDefault();
        const d1 = document.querySelector('[data-up1]');
        const d2 = document.querySelector('[data-up2]');
        const d3 = document.querySelector('[data-up3]');
        const marc = document.querySelector('[data-act]');
        const cuadroEdicion = document.querySelector('[data-form-act]');
        cuadroEdicion.classList.toggle('oculto');

        d1.value = c1;
        d2.value = c2;
        d3.value = c3;
        marc.dataset.id= id;
    });

    const btnElim = linea.querySelector('[data-elim]');
    btnElim.addEventListener('click', (acc)=>{
        acc.preventDefault();
        eliminarReg(id);
    })

    return linea;
}

export const servicios ={
    adicionarReg,
    actualizarReg,
    mostrarEnWeb,
    obtenerDB,
}