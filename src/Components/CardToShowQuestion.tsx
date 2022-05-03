import classes from "./CardToShowQuestion.module.css";

function CardToShowQuestion(props: any) {
  return <div className={classes.header}>{props.children}</div>;
}

export default CardToShowQuestion;
