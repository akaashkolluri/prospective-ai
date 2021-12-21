import { Component } from "react";
import styles from "../styles/Events.module.css";
import Link from "next/link";

class EventCard extends Component {
  render() {
    return (
      <div>
        <a className={styles.card} href={this.props.link}>
          <h2>
            {this.props.title}
            <p>{this.props.date}</p>
          </h2>
          <p>{this.props.message}</p>
          <h3>{this.props.hoverMessage}</h3>
        </a>
      </div>
    );
  }
}
export default EventCard;
