import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function expenseValidator (merchant, price, date) {
  if(merchant.length < 1 ) {
    toast.error('Merchant is required!');
    return false;
  }

  if(price <= 0 ) {
    toast.error('Price is required!');
    return false;
  }

  if(date.length < 1 ) {
    toast.error('Date is required!');
    return false;
  }

  return true;
}

export default expenseValidator;