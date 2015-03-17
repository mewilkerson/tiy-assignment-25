
var SearchBar = React.createClass({


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
      <form onSubmit={this.onSubmit}>
        <input onChange={this.updateKeyword} type="text" className="search-box" value={this.state.keyword} placeholder="Hit me." />
        <input type="submit" value="Search" />
      </form>  
      );
  }

});

var SearchBox = React.createClass({
 
  logKeyword: function(keyword) {
    console.log("keyword:", keyword);
  },

  render: function() {
    return <SearchBar onSearch={this.logKeyword} />;
 }   
})

$(function(){
  React.render(<SearchBox/>, document.body);
});


// Questions:
// Props?
// State?
// Why isn't this preventing the default action in onSubmit?
// Where to begin with tracking the keyword??