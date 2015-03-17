
var SearchBar = React.createClass({displayName: "SearchBar",


  onSubmit: function(e) {
    e.preventDefault();
    // console.log("BOO!");
  },

  updateKeyword: function() {
    this.setState({keyword: e.target.value});
  },

  render: function() {
    return (
      React.createElement("form", {onSubmit: this.onSubmit}, 
        React.createElement("input", {type: "text", className: "search-box", placeholder: "Hit me."}), 
        React.createElement("input", {type: "submit", value: "Search"})
      )  
      );
  }

});

var SearchBox = React.createClass({displayName: "SearchBox",
 
  logVolume: function(keyword) {
    console.log("keyword:", keyword);
  },

  render: function() {
    return React.createElement(SearchBar, null);
 }   
})

$(function(){
  React.render(React.createElement(SearchBox, null), document.body);
});


// Questions:
// Props?
// State?
// Where to begin with tracking the keyword??