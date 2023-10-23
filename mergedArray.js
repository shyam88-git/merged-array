function mergedArray(arr1,arr2){

    let merArr=[...arr1,...arr2];

    let uniqueElement=[];

     for(let i=0;i<merArr.length;i++){

        if(uniqueElement.indexOf(merArr[i])===-1){

            uniqueElement.push(merArr[i]);
        }
     }
     return uniqueElement;



}
console.log(mergedArray([10,20,30],[20,30,40,50,60]));