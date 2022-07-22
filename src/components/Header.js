import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log("Click");
  };

  // const onHover = () => {
  //   console.log("hovered");
  // };

  return (
    <div>
      <header className="header">
        <h1>{title}</h1>
        <Button color="green" text="Add" onClick={onClick} />
      </header>
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// Css in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
