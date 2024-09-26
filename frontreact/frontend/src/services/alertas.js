import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  })


const acceptPopUp = (title, confirmText, denyText) => {
    return new Promise((resolve) => {
      Swal.fire({
        title: title,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: 'No',
        customClass: {
          actions: 'my-actions',
          cancelButton: 'order-1 right-gap',
          confirmButton: 'order-2',
          denyButton: 'order-3',
        },
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(confirmText, '', 'success');
          resolve(true);
        } else if (result.isDenied) {
          Swal.fire(denyText, '', 'info');
          resolve(false);
        } else {
          resolve(false);
        }
      });
    });
  };


const muestraAlerta=async(titulo,icon)=>{
    await Toast.fire({
        icon: icon,
        title: titulo,
      })
}


export {acceptPopUp,muestraAlerta}






  