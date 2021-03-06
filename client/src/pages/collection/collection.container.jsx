import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import collectionPage from './collection.component';

const mapStatetoProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStatetoProps),
  WithSpinner
)(collectionPage);

export default CollectionPageContainer;
