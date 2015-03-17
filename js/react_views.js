
var SearchBar = React.createClass({displayName: "SearchBar",


  onSubmit: function(e) {
    e.preventDefault();
    this.props.onSearch(this.state.keyword);
  },

  getInitialState: function() {
    return {keyword: ""};
  },

  updateKeyword: function(e) {
    this.setState({keyword: e.target.value});
  },

  render: function() {
    return (
      React.createElement("form", {onSubmit: this.onSubmit}, 
        React.createElement("input", {onChange: this.updateKeyword, type: "text", className: "search-box", value: this.state.keyword, placeholder: "Hit me."}), 
        React.createElement("input", {type: "submit", value: "Search"})
      )  
      );
  }

});

var SearchBox = React.createClass({displayName: "SearchBox",
 
  logKeyword: function(keyword) {
    console.log("keyword:", keyword);
  },

  render: function() {
    return React.createElement(SearchBar, {onSearch: this.logKeyword});
 }   
})

$(function(){
  React.render(React.createElement(SearchBox, null), document.body);
});


// Questions:
// Props?
// State?
// Why isn't this preventing the default action in onSubmit?
// Where to begin with tracking the keyword??