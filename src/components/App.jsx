import { Component } from "react"
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback(){
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage() {
    const positiveFeedbackPercentage = (this.state.good / this.countTotalFeedback()) * 100
    return Math.round(positiveFeedbackPercentage)
  }
 
  render () {
    const {good, neutral, bad} = this.state;
  
    const countLeaveFeedback = (event) => {
      const feedbackType = event.target.name
      this.setState(prevstate => prevstate[feedbackType] += 1)
    }
    
    return <Section title="Please leave feedback">
      <FeedbackOptions options={this.state} onLeaveFeedback={countLeaveFeedback}/>
      <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
    </Section> 
    }
};
