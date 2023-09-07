
import './App.css';
import { useGetAllProductsQuery } from './services/api';
function App() {
  const { data, error, isLoading } = useGetAllProductsQuery({});
  console.log(data)
  return (
    <div className="App">
     {!isLoading && 
     data.products.map((item:any)=>{
           return <li>
            <img src={item.images[4]} />
            {item.title}</li>
     })}
    </div>
  );
}

export default App;
