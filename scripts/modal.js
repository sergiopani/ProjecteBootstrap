//const { getProduct } = require("../../../controllers/product");

new Vue({
  el: "#app",
  data: {    
    productos : [],
    cantidadTotal: 0.0,
    precioTotal: 0.0,
    modalWrap: null,
    actualPosition: 1,//Inicializado a 1 
    cantidadActual: 0.0,
    /*components: {
      Formulario,
    },*/

  },
  created(){
    this.getProduct();
  },
  methods: {
    abrirModal: function (actualPosition) {
      //Pasamos la posicion actual del array
      this.actualPosition = actualPosition;
      var x = document.getElementById("modale");
      if (x.style.display != "block") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }


    },
    cerrarModal: function () {
      var x = document.getElementById("modale");
      if (x.style.display != "block") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },
    setPrecio: function (precio) {
      precio *= this.cantidadActual;
      this.precioTotal += precio;
    },

    setCantidad: function () {
      this.cantidadTotal += Number(this.cantidadActual);
      this.cantidadActual = 0;
      console.log("La cantidad es de " + this.cantidadTotal);
    },

    validarCantidad: function () {
      if (this.cantidadActual <= 0) {
        alert("La cantidad debe de ser mayor o igual a 0!");
      }
    },
    /*
    showModal: function (url, descripcion, precio) {
        //para no crear multiple boxes
        if (this.modalWrap != null) {
            this.modalWrap.remove();
        }
        this.modalWrap = document.createElement("div");
        this.modalWrap.innerHTML = `
                
            `;
        //Provided by bootstrap
        document.body.append(this.modalWrap);
        var modal = new bootstrap.Modal(this.modalWrap.querySelector(".modal"));
        modal.show();
    },
    */
    
    getProduct(){
      fetch('/product/62b82018432ed755ec5fa6f4')
      .then(res=>res.json())
      .then(data=> {
        
        this.productos = data.product.productos;
        console.log(this.productos);
      })
      .catch((err) => console.log(err.message));
    }
  },
  

  /*
  mounted() {
    fetch('../data/pro')
      .then((res) => res.json())
      .then(console.log(data))
      .then((data) => (this.productos = data))
      .catch((err) => console.log(err.message));
  },
  */
  

});
