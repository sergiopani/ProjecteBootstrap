/*Guardamos en cada variable cada 
producto y despues su descripcion*/
var modalWrap = null;
const showModal = () => {
    //para no crear multiple boxes
    if(modalWrap!=null){
        modalWrap.remove();
    }
    modalWrap = document.createElement('div');
    modalWrap.innerHTML = `
    <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Hola</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>22.00$</p>
        </div>
        <div class="modal-footer">          
          <button type="button" class="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>
  </div>      
  `
    ;
    //Provided by bootstrap
    document.body.append(modalWrap);
    var modal = new bootstrap.Modal
    (modalWrap.querySelector('.modal'));
    modal.show();
}