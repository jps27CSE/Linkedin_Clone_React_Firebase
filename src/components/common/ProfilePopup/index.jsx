// import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../../api/AuthAPI";
// import { getCurrentUser } from "../../../api/FirestoreAPI";

import "./index.scss";

export default function ProfilePopup() {
  //   let navigate = useNavigate();

  return (
    <div className="popup-card">
      <ul className="popup-options">
        <li className="popup-option" onClick={Logout}>
          LogOut
        </li>
      </ul>
    </div>
  );
}
