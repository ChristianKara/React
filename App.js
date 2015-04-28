	var App = React.createClass({
	render:function(){
	return (
		<div>
		<h1>Hello World!!!</h1>
		<h2>I am doing it right</h2>
		<h3>...maybe</h3>
		<h3>{this.props.txt}</h3>
		</div>
		)
	}
});

	React.render(<App txt='This is the props text'/>, document.body);