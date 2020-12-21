import { connect } from 'react-redux';
import Column from './Column.js';
import { getCardsForColumn, createActionAddCard } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  columns: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps,mapDispatchToProps)(Column);