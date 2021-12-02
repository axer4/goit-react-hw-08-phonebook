import styles from './Filter.module.css'
import PropTypes from 'prop-types';
import { contactsFilter } from '../../redux/actions';
import { connect } from 'react-redux';
  function Filter({ value,contactsFilter}) {
     return <label className = {styles.label}>
                <h3 className = {styles.heading}>Find contacts by name</h3> 
            <input
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                autoComplete="off"
                onChange = {contactsFilter}
             className = {styles.input}
         >
            </input>
            </label>
}
Filter.propTypes = {
    filter: PropTypes.string,
    handleFilterChange:PropTypes.func,
}
const mapDispatchTopProps = dispatch => {
    return {
        contactsFilter : (e) => dispatch(contactsFilter(e.target.value))
    }
}

export default connect(null,mapDispatchTopProps)(Filter);