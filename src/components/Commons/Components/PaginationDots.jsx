import React from "react";
import PropTypes from "prop-types";
import { PaginationDot } from "./";

const styles = {
  root: {
    position: "relative",
    margin: "0 auto",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row"
  }
};

class PaginationDots extends React.Component {
  handleClick = (event, index) => {
    this.props.onChangeIndex(index);
  };

  render() {
    const { index, dots } = this.props;

    const children = [];

    for (let i = 0; i < dots; i += 1) {
      children.push(
        <PaginationDot
          key={i}
          index={i}
          active={i === index}
          onClick={this.handleClick}
        />
      );
    }

    return <div style={styles.root}>{children}</div>;
  }
}

PaginationDots.propTypes = {
  dots: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onChangeIndex: PropTypes.func.isRequired
};

export default PaginationDots;
