import App from "next/app";
import React from "react";
import { Wrapper } from "../lib/wrapper";

export default class NextApp extends App {
  render(): JSX.Element {
    const { Component } = this.props;

    return (
      <Wrapper>
        <Component />
      </Wrapper>
    );
  }
}
