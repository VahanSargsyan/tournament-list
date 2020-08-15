import { connect } from "react-redux";
import { Favorites } from "../components";

import { deleteFavorite } from "../actions";

const mapStateToProps = (state) => ({
  favorites: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteFavorite: (data) => dispatch(deleteFavorite(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
