// we are getting the array data cagetories from our app
// we are now importing from our categories typescript file now
import categories from "../categories";

const ExpenseForm = () => {
  

  return (
    <>
      <form >
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input id="description" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount</label>
          <input id="amount" type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <select id="category" className="form-select">
            {/* now we can add optoins into our dropdown and we'll use our array that was imported*/}
            {/* notice that categories is holding our array. we then map it so we can get the various elements in the array  */}
            {/* map has a call back so we make category as our parameter and we make our option as our call back */}
            <option value=""></option>
            {categories.map(category => <option key={category} value={category}>{category}</option> )}
          </select>
        </div>
        <button className="btn btn-outline-primary">Submit</button>
      </form>
    </>
  );
};

export default ExpenseForm;
