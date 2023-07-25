import Wrapper from '../../Assets/wrappers/DashboardFormPage'
import { useAppContext } from '../../Contexts/AppContext'
import {FormRow, Alert, FormRowSelect} from '../../Components/index'

const AddExpense = () => {
const method = [
  'Cash',
  'E-cash',
]
const status = [
  'Paid',
  'Pending'
]


  return (
    <Wrapper>
      <form className='form'>
        <h3>Add expense</h3>
        <div className='form-center'>
          <FormRow labelText={'Purpose/Description'} name={'name'}/>
          <FormRow labelText={'amount'} name={'name'}/>
          <FormRow labelText={'Paid to:'} name={'name'}/>
          <FormRowSelect labelText={'Payment Method:'} list={method} />
          <FormRowSelect labelText={'Status:'} list={status} />
           {/* Btn Container */}
           <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddExpense