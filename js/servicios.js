import { servicios } from "./modulo-funciones.js";

const formReg = document.querySelector('[data-form-registro]');
const formAct = document.querySelector('[data-form-act]');

servicios.obtenerDB().then(
    (data) => {
        data.forEach(
            ({ campo1, campo2, campo3, id }) => {
                const nuevaLinea = servicios.mostrarEnWeb(campo1, campo2, campo3, id);
                const padreLista = document.querySelector('[data-tabla]');
                padreLista.appendChild(nuevaLinea);
            })
    }
);

formReg.addEventListener('submit', (acc) => {
    acc.preventDefault();
    const d1 = document.querySelector('[data-input1]').value;
    const d2 = document.querySelector('[data-input2]').value;
    const d3 = document.querySelector('[data-input3]').value;

    servicios.adicionarReg(d1, d2, d3);
});

formAct.addEventListener('submit', (acc) => {
    acc.preventDefault();
    const d1 = document.querySelector('[data-up1]').value;
    const d2 = document.querySelector('[data-up2]').value;
    const d3 = document.querySelector('[data-up3]').value;
    const marc = document.querySelector('[data-act]');
    const id = marc.dataset.id;
    servicios.actualizarReg(d1,d2,d3,id);
})