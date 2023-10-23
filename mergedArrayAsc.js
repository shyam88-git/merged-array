function mergedArray(arr1,arr2){

    let newArr=[...arr1,...arr2];
    let uniqueElement=[];

    for(let i=0;i<newArr.length;i++){

        for(let j=0;j<newArr.length;j++){

            if(newArr[j]>newArr[j+1]){

                let temp=newArr[j+1];
                newArr[j+1]=newArr[j];
                newArr[j]=temp;

            }
        }
    }
    
    for(let i=0;i<newArr.length;i++){

        if(uniqueElement.indexOf(newArr[i])===-1){

            uniqueElement.push(newArr[i]);
        }
    }
    return uniqueElement;


}
console.log(mergedArray([20,40,30,10],[30,40,50,60]));