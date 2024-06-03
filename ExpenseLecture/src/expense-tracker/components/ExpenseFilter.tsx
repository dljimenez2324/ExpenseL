// notice that instead of importing fro the app.tsx  we moved the categories to a separate ts file
import categories from "../categories";

interface FilterProps {
    onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({onSelectCategory}:FilterProps) => {
  return (
    <>
        {/* Where is the onChange saving its info and where does it go? */}
        <select className="form-select" onChange={(e) => onSelectCategory(e.target.value)} >
            <option value="">All Categories</option>
            {categories.map(category => <option key={category} value={category}>{category}</option> )}
            {/* notice that this below is hard coded but our expense form also has this so lets just use the same categories array here */}
            {/* <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Food">Food</option>
            <option value="Shopping">Shopping</option> */}
        </select>
    </>
  )
}

export default ExpenseFilter