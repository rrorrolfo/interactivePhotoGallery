// VARIABLES:

const search_text = document.querySelectorAll(".search_text");
const search_input = document.querySelector("input");
const images = document.querySelectorAll("#photo_gallery a");

// FUNTIONS

function search() {
    
    const filt = search_input.value.toUpperCase();

    for (let i = 0; i < search_text.length; i += 1) {

        if (search_text[i].textContent.toUpperCase().indexOf(filt) > -1){
            search_text[i].previousElementSibling.style.display = "block";
            }
            else {
                search_text[i].previousElementSibling.style.display = "none"
            }
        
    }
}

