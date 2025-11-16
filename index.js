const colorForm = document.getElementById("selector-form")
const baseURL = "https://www.thecolorapi.com/scheme"

colorForm.addEventListener('submit',function(e){
    e.preventDefault()
    const formData = new FormData(colorForm)
    const hexCode = formData.get("color-picker").slice(1)
    const selectedOption = formData.get("selectedOption")
    fetch(baseURL+`?hex=${hexCode}&mode=${selectedOption}`)
    .then(response=>{
        if (!response.ok){
            console.log(`HTTP Error! status ${response.status}`)
        }
        return response.json()
    }).then(data=>{
        const colorsArray = data.colors.map(color => {
            return color.hex.value
        })
        fillColors(colorsArray)
    }).catch(error=>{
        console.log("Error Fetching the data: ", error)
    })
})

function fillColors(colorsArray){
    console.log(colorsArray)
    for(let i=1;i<=5;i++){
        const color = document.getElementById(`color-${i}`)
        const colorHexCode = document.getElementById(`name-${i}`)
        color.style.background = colorsArray[i-1]
        colorHexCode.textContent = colorsArray[i-1]
    }
}