const anchors = document.querySelectorAll('a[href*="#"]')

let EventHLNOW = false;
let EvenItems; 
let btn = document.getElementById('btn'); 

let SortedtEl = document.querySelectorAll('.item'); 
let Elements = document.getElementsByClassName('item'); 
isSorted = false; 

for (let anchor of anchors)
{
    anchor.addEventListener("click", function(event)
    {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
        behavior:"smooth",
        block: "start"}) 
    })
}

btn.addEventListener('click',() =>
{
    EventHLNOW = true; 
    EvenItems = document.querySelectorAll('.item:nth-child(even)'); 
    let color = "rgb(253, 3, 3)"; 
    for(let i = 0; i< EvenItems.length;i++)
    {
        EvenItems[i].style.backgroundColor = color;
    }
})

let btntrans = document.getElementById('btn2');
btntrans.addEventListener('click',() => 
{
    EventHLNOW = false;
    let color = "transparent";
    for(let i = 0; i< Elements.length;i++){
        Elements[i].style.backgroundColor = color;
    }
})


let btnSort = document.getElementById('btnSort'); 
btnSort.onclick = function(event)
{
    if (!isSorted)
    {
        btnSort.style.backgroundColor = "rgb(95, 82, 98)"; 
        for ( let i = 0; i < Elements.length; i++)
        {
            for ( let j = 0; j < Elements.length - i - 1; j++)
            {
                let FirstDigit = parseFloat(Elements[j].children[2].innerHTML.match(/\d+/)); 
                let SecondDigit = parseFloat(Elements[j + 1].children[2].innerHTML.match(/\d+/));
                if (FirstDigit > SecondDigit){
                    Elements[j].before(Elements[j + 1]);
                }
            }
        isSorted = true; 
        }
    }
    else {
        btnSort.style.backgroundColor = "transparent";
        for (let i = 0; i < SortedtEl.length; i++)
        {
            Elements[i].before(SortedtEl[i]);
        }
        isSorted = false;
    }

    if (EventHLNOW)
    {
        for(let i = 0; i< Elements.length;i++){
            Elements[i].style.backgroundColor = "transparent";
            }
        EvenItems = document.querySelectorAll('.item:nth-child(even)');
        let color = "rgb(128, 169, 192)";
        for(let i = 0; i< EvenItems.length;i++){
            EvenItems[i].style.backgroundColor = color;
            }
        }
  };


