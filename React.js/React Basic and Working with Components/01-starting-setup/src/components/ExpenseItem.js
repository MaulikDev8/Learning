import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>APR 2ND 2023</div>
      <div className='expense-item__description'>
        <h2>Petrol</h2>
        <div className='expense-item__price'>$510</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
