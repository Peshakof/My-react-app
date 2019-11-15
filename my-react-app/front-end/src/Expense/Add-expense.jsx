import React from 'react';
import './Expense.css';

function AddExpense() {

    return (
        <div id="form-expense">
            <div id="form-div">

                <form className="form" id="form1">

                    <p className="merchant">
                        <input name="merchant" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Merchant" id="merchant" />
                    </p>

                    <p className="price">
                        <input name="price" type="number" className="validate[required,custom[email]] feedback-input" id="price" placeholder="Price" />
                    </p>

                    <p>
                        <input name="date" type="date" className="feedback-input" placeholder="Date" id="date" />
                    </p>

                        <select name="category" id="category">
                            <option value="Bills">Bills</option>
                            <option value="Rents">Rents</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Clothes">Clothes</option>
                            <option value="Pet">Pet</option>
                            <option value="House">House</option>
                            <option value="Transport">Transport</option>
                            <option value="Food">Food</option>
                            <option value="Toiletry">Toiletry</option>
                            <option value="Health">Health</option>
                        </select>

                        <p className="text">
                            <textarea name="text" className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Comment"></textarea>
                        </p>

                        <div className="submit">
                            <input type="submit" value="Add expense" id="button-blue" />
                            <div className="ease"></div>
                        </div>
                </form>
            </div>
        </div>
    )
}
        
export default AddExpense;