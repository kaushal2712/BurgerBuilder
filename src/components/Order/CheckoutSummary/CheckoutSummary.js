import React, { Component } from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.css";

export default class CheckoutSummary extends Component {
  render() {
    return (
      <div className={classes.CheckoutSummary}>
        <h1>We hope it taste well</h1>
        <div style={{ width: "100%", margin: "auto" }}>
          <Burger ingredients={this.props.ingredients} />
        </div>
        <Button btnType="Success" clicked={this.props.checkoutContinued}>
          CONTINUE
        </Button>
        <Button btnType="Danger" clicked={this.props.checkoutCancelled}>
          CANCEL
        </Button>
      </div>
    );
  }
}
