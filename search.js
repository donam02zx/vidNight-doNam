const search = ()=>{
    const searchBox = document.querySelector(".header__search-input").value.toUpperCase();
    const storeitems = document.querySelector(".grid__row-2")
    const product = document.querySelectorAll(".right-sidebar__list")
    const pname = document.getElementsByTagName("h4")

    for(var i=0; i<pname.length; i++){
        let match = product[i].getElementsByTagName('h4')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchBox) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    }
}