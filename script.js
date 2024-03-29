const search=document.querySelector("#buttonsearch");
const text=document.querySelector("#searchbar");
search.addEventListener("click",()=>{
    console.log("clicked");
    console.log(text.value);
    let newlink=`https://www.amazon.com/s?k=${text.value}&crid=2Q75WTUKHXPJQ&sprefix=${text.value}%2Caps%2C738&ref=nb_sb_noss_2`;
    // https://www.amazon.com/s?k=mobiles&crid=V6KLGAUKW0YW&sprefix=mobiles%2Caps%2C561&ref=nb_sb_noss_1
    window.location.href=newlink;
    
});
