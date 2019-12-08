import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function incomeValidator (category, price, date) {
  if(category.length < 1 ) {
    toast.error('Category is required!');
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

export default incomeValidator;