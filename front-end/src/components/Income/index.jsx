import React from 'react';
import './AddIncome.css';

function AddIncome() {
    return (
        <div id="form-income">
            <div id="form-div">
                <form class="form" id="form1">

                    <p class="price">
                        <input name="price" type="number" class="feedback-input" id="price" placeholder="Price" />
                    </p>

                    <p><input type="date" class="feedback-input" placeholder="Date" id="date" /></p>

                        <select name="category" id="category">
                            <option value="">Category</option>
                            <option value="Deposit">Deposit</option>
                            <option value="Salary">Salary</option>
                            <option value="Savings">Savings</option>
                        </select>

                    <p class="text">
                        <textarea name="text" class="feedback-input" id="comment" placeholder="Comment"></textarea>
                    </p>

                    <div class="submit">
                        <input type="submit" value="Add income" id="button-blue" />
                        <div class="ease"></div>
                    </div>
                </form>
            </div>
        </div>
    )
}
        
export default AddIncome;