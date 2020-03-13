import "./danmu.scss";

import React, { Component } from "react";

class DanmuItem extends Component<any, any> {
  private startTime: number;
  constructor(props) {
    super(props);
    this.state = {
      right: -1 * props.data.content.length * 14
    };
    this.startTime = Math.round(Math.random() * 3000 + props.index * 1000);
  }

  componentDidMount() {
    setTimeout(() => {
      this._moveLeft(this.state.right);
    }, this.startTime);
  }

  _moveLeft = (rightValue: number) => {
    if (rightValue > window.innerWidth + this.props.data.content.length * 14) {
      setTimeout(() => {
        this._moveLeft(-1 * this.props.data.content.length * 14);
      }, Math.round(Math.random() * 2000 + 1000));
      return;
    }
    this.setState(
      {
        right: rightValue + 3
      },
      () => {
        setTimeout(() => {
          this._moveLeft(rightValue + 3);
        }, 50);
      }
    );
  };

  render() {
    const { data } = this.props;
    return (
      <span
        className="DanmuItem"
        style={{
          top: data.top,
          right: this.state.right
        }}
      >
        {data.content}
      </span>
    );
  }
}

const default_danmu = [
  {
    top: 10,
    content: "这首诗真好"
  },
  {
    top: 40,
    content: "这首诗写得真好"
  },
  {
    top: 60,
    content: "这首诗真好"
  },
  {
    top: 90,
    content: "好喜欢这首诗啊!!!!"
  },
  {
    top: 130,
    content: "这首诗真好"
  }
];

export default class Danmu extends Component<any, any> {
  render() {
    const { danmu = default_danmu } = this.props;
    return (
      <div className="Danmu">
        <div className="Danmu-inner">
          {danmu.map((data, index) => (
            <DanmuItem key={index} data={data} index={index} />
          ))}
        </div>
      </div>
    );
  }
}
