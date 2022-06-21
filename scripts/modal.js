/*Guardamos en cada variable cada 
producto y despues su descripcion*/
var modalWrap = null;
const showModal = (url, descripcion, precio) => {
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
          <input class="col-2" type="number" id="quantity" name="quantity" min="1" max="5">
          <button type="button" class="btn btn-primary bg-dark col-6">COMPRAR</button>
        </div>
      </div>
    </div>
  </div>      
  `;
  //Provided by bootstrap
  document.body.append(modalWrap);
  var modal = new bootstrap.Modal(modalWrap.querySelector(".modal"));
  modal.show();
};