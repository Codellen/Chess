const checkBoxes = document.querySelectorAll('.files');
//we need to map all the moves and need to uniquely identify all the checkboxes

const filesNameArray = ["a","b","c","d","e","f","g","h"];

const checkBoxesArray = Array.from(checkBoxes)
let fileNumber = 0
checkBoxesArray.forEach(function(ele){   //this for each loop go through every files eith class files
          // .children get the child of files div 
          const children = ele.children;
          const childrenArray = Array.from(children);
          let count =1;
          childrenArray.forEach(function(list){
          list.setAttribute('id',filesNameArray[fileNumber]+count++)
          //console.log(list)
})
fileNumber++;

})

//after mapping lets add background color when clicked on piece
let removeBackColor = [];
const pieceOnClick = document.getElementsByClassName("square");
const onClick = Array.from(pieceOnClick);

onClick.forEach(function(element){


    element.addEventListener('click',function(){
        const getId = element.getAttribute('id');
        element.style.backgroundColor = ""; 
        const getInnerHtml = element.innerHTML;
        //console.log(getInnerHtml) ;
        if(removeBackColor.length>0)
        {
           removeBackColor[0].removeAttribute('style');
           removeBackColor.length=0;
        }

        if(getInnerHtml.includes('png'))
        {
            element.style.backgroundColor = "rgb(186,202,43)";
         
        }
        
        removeBackColor.push(element)
       
     })
    
})

//mapping of pawn its initial position
//first we have to get id all of both black and white pawn and store in an empty array to itreate it over that array to set position

let arrayOfPawn = [];
//as we need to get all pawns present in 2 and 7 rank, only needs to change file name(filesNameArray)

filesNameArray.forEach(function(event){
    arrayOfPawn.push(document.getElementById(event+2));
})


//similarly for white pawns
filesNameArray.forEach(function(event){
    arrayOfPawn.push(document.getElementById(event+7));
})
//console.log(arrayOfPawn);
//now neeed to iterate over pawn array element and add event listener

arrayOfPawn.forEach(function(pawn){
    pawn.addEventListener('click',function(){
        // 
       
        const currentId = pawn.getAttribute('id');
        //console.log(typeof(currentId));//type of current id is string;
        const alpha = currentId[0];
        const numeric = parseInt(currentId[1]);
        //console.log(typeof(numeric)); 

        const incrementSquare = [];
        const trackArrayCircle = [];
        

   if(numeric == 2 )  
   {
//as we know it intially take two steps , so lets two block ids
for(let i = 1;i <= 2; i++)
{
//     const removehtml = function(circle){
//         circle.forEach(function(cur){
//             cur.innerHTML="";
//         })
//     }
    
   incrementSquare.push(document.getElementById(alpha + (numeric + i)));
   const highlightDiv = document.createElement('div');
   highlightDiv.classList.add('highlightSquare');
    incrementSquare[i-1].classList.add('flex')

   incrementSquare[i-1].appendChild(highlightDiv);
   

trackArrayCircle.push(incrementSquare[i-1]);





}
// if(trackArrayCircle.length !=0)
//         {
//             // console.log(trackArrayCircle);
//             //  trackArrayCircle[0].innerHTML="";
//             //  trackArrayCircle[1].innerHTML="";
//             // console.log(trackArrayCircle.length)
//            removehtml(trackArrayCircle);
//         }



   }   
 else{
//same we have to did for white but this time decrese block rank
for(let i = 1;i<=2;i++)
 {
    incrementSquare.push(document.getElementById(alpha + (numeric - i)))
    const highlightwhiteDiv = document.createElement('div');
    highlightwhiteDiv.classList.add('highlightSquare');
     incrementSquare[i-1].classList.add('flex');
     incrementSquare[i-1].appendChild(highlightwhiteDiv);
 }

 }
    })
 

})

// const underCircle = function(trackArrayCircle){
//     trackArrayCircle.forEach(function(ele){
//         console.log(ele.innerhtml);
//      })
// }



