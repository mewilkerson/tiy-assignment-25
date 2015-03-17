
var SearchBar = React.createClass({


  onSubmit: function(e) {
    e.preventDefault();
    // console.log("BOO!");
  },

  updateKeyword: function() {
    this.setState({keyword: e.target.value});
  },

  render: function() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" className="search-box" placeholder="Hit me." />
        <input type="submit" value="Search" />
      </form>  
      );
  }

});

var SearchBox = React.createClass({
 
  logVolume: function(keyword) {
    console.log("keyword:", keyword);
  },

  render: function() {
    return <SearchBar/>;
 }   
})

$(function(){
  React.render(<SearchBox/>, document.body);
});


// Questions:
// Props?
// State?
// Where to begin with tracking the keyword??