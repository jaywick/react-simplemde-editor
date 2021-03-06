var React = require('react');
var ReactDOM = require('react-dom');
var SimpleMDEReact = require('../../src/index');

module.exports = React.createClass({

  getMarkdownOptions() {
    return {
      autofocus: false,
      spellChecker: true,
      initialValue: this.props.value
    }
  },

  getCursor(cursor) {
    console.log(cursor);
  },

  getMdeInstance(mde) {
    console.log(mde);
  },

  render() {
    return (
      <SimpleMDEReact
        onChange={this.props.handleEditorChange}
        options={this.getMarkdownOptions()}
        label={this.props.label}
        value={this.props.value}
        extraKeys={this.props.extraKeys}
      />
    );
  }
});
