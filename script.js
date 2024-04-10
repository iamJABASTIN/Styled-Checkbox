const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')
const toggles = document.querySelectorAll('.toggle')

function doTheTrick(clickedOne) {
    if(cheap.checked && good.checked && fast.checked){
        if(good === clickedOne) fast.checked = false
        if(cheap === clickedOne) good.checked = false
        if(fast === clickedOne) cheap.checked = false
    }
}

toggles.forEach( toggle => toggle.addEventListener('change', (e)=>{
    doTheTrick(e.target)
}))
