import { useState, useEffect } from 'react';

/*when ever we call this function we must pass a url  
and we need to name the data what ever we want  where ever we called it from 
when ever we make a hook we need to neme it use like{usestate, useefect, usefetch}
*/
const useFetch = (url) => {
    const [data, setdata] = useState(null);
    const [isloading, setisloading] = useState(true)
    //loading untill we ger data from db
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
        .then ((res)=> {
        //after we feched data chek fo errors
           if (!res.ok) {
        //if there is an error throw this erroor to be cutched
              throw Error('file can not be reached')
           }
        //else res the files 
          return res.json()
        })
        .then (data =>{
        //then name the data stocks and 
          setdata(data)
          //dont render loading any more
          setisloading(false)
          //let error be empty becouse its a conditional renering
          setError(null)
        })
              .catch(err => {
        //if error is thrown catch and render
        setError(err.message)
        //no more loading
        setisloading(false)
        }
        )
         }, [url]);
          /*use effect renders what its told on every reload but when we give it a second argument 
             it will run depending on the dependenci given inside[] 
             now thi the one befor me runs at the begning and when ever the name function is changed 
             its running only depends on the [names]
             BUT onnce it run and the value or function run it will not run again un less it keeps changing 
             */
        
             /*        connditional templating inn react  if left is faulse never even bothers 
             we uuse stocks && becouse it will take time antill it gets a responce from the data base andfor
              tha this will make it not  run untill we get  responce or stocks is not nuull*/
    return { data, isloading,  error};
}
 
export default useFetch;