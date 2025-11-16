const colorForm = document.getElementById("selector-form")

colorForm.addEventListener('submit',function(e){
    e.preventDefault()
    const formData = new FormData(colorForm)
    console.log(formData.get("color-picker"))
})