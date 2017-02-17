var App = () =>  (
  <h2>Grocery List: </h2>
  <GroceryList />
);

var GroceryList = (attr) => (
  <ul> 
    {attr.groceries.map( grocery => 
      <GroceryListItem name={grocery} />
    )}
  </ul>
);

var GroceryListItem = (attr) => (
  <li>{attr.name}</li>
);




