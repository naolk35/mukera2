
import CountBoutton from "./component/CountBottons";

const OrderListt = (props) => {
    const stocks = props.stocks
    const title = props.title
    
  
    
    
    
    return (  
        <div className="blog-list">
            <h1 >{title}</h1>
        {stocks.map((stock) =>  (
         
            <div className="stockpreview" key={stock.id}>
                   
                <h1>{stock.companyName}</h1>
                <h2>{stock.drugName}</h2>
                <h5>expires on {stock.EXPDate}</h5>
                <p>the sstock value is {stock.amountOnHand}</p>
                <CountBoutton stockValue = {stock.amountOnHand} stockid = {stock.id}/>
            </div>
            
        ))}
        </div>
    );
}
 
export default OrderListt;