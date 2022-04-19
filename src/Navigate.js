import { Router, useNavigate } from "react-router";

function Navigate(props) {
  let nav = useNavigate();
  return <Router>{nav(JSON.stringify(props.path))}</Router>;
}

export default Navigate;