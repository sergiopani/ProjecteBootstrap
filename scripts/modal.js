/*Guardamos en cada variable cada 
producto y despues su descripcion*/

// onclick="${productos.setPrecio(precio)}"

/*****************CODIGO ----- VUE****************/
//import Formulario from "./formulario.vue";

const app = Vue.createApp({
  setup() {
    const productos = [];
    const cantidadTotal = 0;
    const precioTotal = 0;
    const modalWrap = null;
    /*components: {
      Formulario,
    },*/
    return {
      productos,
      cantidadTotal,
      precioTotal,
      modalWrap,
    };
  },
  methods: {
    abrirModal: function (url, descripcion, precio) {
      //Llama a la funcion modal de Modal.js que mustra el modal
      this.showModal(url, descripcion, precio);
    },
    setPrecio: function (precio) {
      this.precioTotal += precio;
      alert("El precio total es" + this.precioTotal);
    },

    setCantidad: function (cantidad) {
      this.cantidadTotal += cantidad;
    },

    showModal: function (url, descripcion, precio) {
      //para no crear multiple boxes
      if (modalWrap != null) {
        modalWrap.remove();
      }
      modalWrap = document.createElement("div");
      modalWrap.innerHTML = `
    <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header pb-0" style="border:none;">                  
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>          
        </div>
        <div class="modal-body pt-2 justify-content-md-center" style="border:none;text-align:center;">
          <img src="${url}" class="col-12 px-7" style="width:400px;height:300px;" alt="${descripcion}">
          <h5 class="pt-2">${descripcion}</h5>
          <h6>${precio}€</h6>
        </div>
        <div class="modal-footer justify-content-md-center">
            
        </div>
      </div>
    </div>
  </div>      
  `;
      //Provided by bootstrap
      document.body.append(modalWrap);
      var modal = new bootstrap.Modal(modalWrap.querySelector(".modal"));
      modal.show();
    },
  },

  mounted() {
    fetch("http://localhost:3000/productos")
      .then((res) => res.json())
      .then((data) => (this.productos = data))
      .catch((err) => console.log(err.message));
  },
});

/*
const enviarPrecio = (precio) => {
  alert(precio);
  return precio; 

};

const enviarCantidad = (cantidad) => {
  return cantidad;
};

*/
