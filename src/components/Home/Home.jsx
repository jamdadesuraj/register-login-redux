import { connect } from "react-redux";
import { Label } from "reactstrap";
import "./home.css";
const Home = ({ user, isAuthenticated }) => {
  return (
    <Label className=" my-5">
      <div class="main">
        <div class="overlay"></div>
        <div class="text">
          <h3>{`Hello  ${user.firstName} ${user.lastName}`}</h3>
        </div>
      </div>
    </Label>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(Home);
