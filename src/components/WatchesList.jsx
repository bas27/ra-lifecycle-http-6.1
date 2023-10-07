import Watch from "./Watch";
import PropTypes from "prop-types";

export default function WatchesList({ watchesList, deleteWatch }) {
  return (
    <ul className="watches-list">
      {watchesList.map(w => <li className="watches-item" key={w.id}><Watch watch={w} deleteWatch={deleteWatch} /></li>)}
    </ul>
  );
}

WatchesList.propTypes = {
  watchesList: PropTypes.any.isRequired,
  deleteWatch: PropTypes.any.isRequired
}
