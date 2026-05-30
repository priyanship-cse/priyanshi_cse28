let fruit = ["banana", "apple", "orange", "pineapple" , "grapes"] ;
      fruit.pop() ;
     console.log(fruit) ;
    
let max = [1,4,7,9,10] ;
 console.log(Math.max(...max)) ; 
 console.log(Math.min(...max)) ;

 let sum = [2,3,4,6,7,12,8,10] ;
  let s = 0 ; 

  for ( let i = 0 ; i<sum.length ; i++) {
     if ( sum[i]%2 == 0 ) {
         s+= sum[i] ;
     }     
  }

  console.log(s) ;