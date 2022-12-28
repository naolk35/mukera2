
import React,{useState, useEffect} from"react"

const CountBoutton =  (props) => {

  const tid = props.stockValue

const [currentCount, setCurrentCount] = useState(0)

useEffect(()=> {
  setCurrentCount(0);
},[])
/*yehuletegnaw argument lefanctionu baysetew noro buttonochu
 endiseru weym lewt endiametu ayfekdlachewm neber gn ketach 
 sletesetew lela argument ,[]yemil useeffect mejemeria load 
 snaregew bcha new renderyemiaregew ahun lemsale be   setCurrentCount(40); bota
 alert bihon noro hule reload snaregew pagun alert ymetal
*/
return(
   <div  key={tid}>
     <button onClick={() => setCurrentCount (( prevcurrentCount) => prevcurrentCount + 1 )}
    disabled = {currentCount=== tid }>
        +1</button>
     <div>{currentCount}</div>
     <button onClick={() => setCurrentCount (( prevcurrentCount) => prevcurrentCount - 1 ) }
     disabled = {currentCount=== 0}>-1</button>
   
    
   
   </div>
 )
}
export default CountBoutton