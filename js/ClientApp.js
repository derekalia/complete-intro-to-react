
var myTitle = React.createClass({
  render:function(){
    return(
    React.DOM.div(null,
      React.DOM.h1({style:{color: this.props.color, fontWeight: 'bold'}}, this.props.title)
    )
  )
  }
})

var myTitleFactory = React.createFactory(myTitle);

  var myFirstComponent = React.createClass({
    render: function(){
      return (
        React.DOM.div(null,
          myTitleFactory({ title: 'props are the best', color: 'peru'}),
          myTitleFactory({ title: 'semicolons are the worst', color: 'mediumaquamarine'}),
          myTitleFactory({ title: 'jk lol sike', color: 'papayawhip'}),
          myTitleFactory({ title: 'i have so many', color: 'rebeccapurple'})
        )
      )
    }
  })
  ReactDOM.render(React.createElement(myFirstComponent),document.getElementById('app'));
