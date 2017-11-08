import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  // TODO: shouldComponentUpdate()
  // TODO: componentWillReceiveProps()

  componentWillMount() {
    console.log(this.props.newTweets)
    this.setState({
      tweets: [...this.props.newTweets]
    }, () => console.log(this.state.tweets))
  }

  shouldComponentUpdate(newProps) {
    return newProps.newTweets.length > 0;
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      tweets: [ ...newProps.newTweets, ...this.state.tweets]
    })
  }


// have to figure out this last function. Can not render if array is empty.


  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
