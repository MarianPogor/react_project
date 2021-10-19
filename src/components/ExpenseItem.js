import "./ExpenseItem.css";
import Button from "@mui/material/Button"




function ExpenseItem() {
  return (
    <div>
      <div>Date</div>
      <Button style={{
          fontSize:12}} 
          onClick={() => alert('You have to insert a picture')}  
          className="Button"
          href="#" 
          variant="contained" 
          size='large'>
        {" "}
        Click{" "}
      </Button>
      <h2>Car Insurance</h2>
      <div>$294.70</div>
    </div>
  );
}

export default ExpenseItem;
