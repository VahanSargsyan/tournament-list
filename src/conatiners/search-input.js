import { connect } from "react-redux";
import { SearchInput } from "../components";

import { addFavorite } from "../actions";

const mapDispatchToProps = (dispatch) => ({
  addFavorite: (data) => dispatch(addFavorite(data)),
});

export default connect(null, mapDispatchToProps)(SearchInput);
