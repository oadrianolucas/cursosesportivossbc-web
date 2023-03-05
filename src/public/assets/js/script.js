toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: "toast-bottom-center",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "10000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
}
$(document).ready(() => {
  const inputError = document.querySelector("#error_msg")
  const error = inputError.value
  $(".error").append(() => {
    toastr.error(error)
  })
})

$(document).ready(() => {
  const inputSuccess = document.querySelector("#success_msg")
  const success = inputSuccess.value
  $(".success").append(() => {
    toastr.success(success)
  })
})
