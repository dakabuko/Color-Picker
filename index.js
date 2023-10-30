/*selectors*/

const colorInput = document.getElementById("color__input")

const schemeInput = document.getElementById("scheme__input")

const colorPanel = document.getElementById("color__panel")

const submitBtn = document.getElementById("submit__btn")



/*eventlisteners*/

submitBtn.addEventListener("click", getColorPanel)

function getColorPanel(e){
    e.preventDefault()
    const colorInputVlaue = colorInput.value.slice(1)
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInputVlaue}&mode=${schemeInput.value}&count=6`)
        .then(res => res.json())
        .then(data => {
            const colorBars = (data.colors)
            console.log(colorBars)
            colorBars.map(colorBar => {
                colorPanel.innerHTML += `
                    <div class="colorBars">
                        <div class="color__bar">
                            <img class="color__img" src=${colorBar.image.bare} />
                            <p class="color_value">
                            ${colorBar.hex.value}
                            </p>
                        </div>
                       
                    </div>
                
                `
            })
        })

        colorPanel.innerHTML = ``
    
}



