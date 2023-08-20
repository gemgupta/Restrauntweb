import Header from "./Layout/Header";
import MealsSummary from "./Meals/MealsSummary";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";
function App() {
  return (
    <div>
      <Cart/>
     <Header/>
     <MealsSummary/>
<Meals/>
    </div>
  );
}											          							    

export default App;
