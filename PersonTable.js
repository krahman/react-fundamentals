var PersonTable =
	React.createClass({
		getInitialState: function() {
			return {
				data: [
					{
						"id": 1,
						"fname": "Khal",
						"lname": "Rahman"
					},
					{
						"id": 2,
						"fname": "Ulfah",
						"lname": "Muhayani"
					},
					{
						"id": 3,
						"fname": "Nevdanya",
						"lname": "Rahman"
					},
					{
						"id": 4,
						"fname": "Deehan",
						"lname": "Aziz"
					}
				]
			};
		},
		render: function() {
			return (
					<table>
						{this.state.data.map(function(person, i) {
							return <PersonRow key={i} data={person} />
						})}
					</table>
				);
		},
	});

var PersonRow = 
	React.createClass({
		render: function() {
			return (
					<tr>
						<td>{this.props.data.id}</td>
						<td>{this.props.data.fname}</td>
						<td>{this.props.data.lname}</td>
					</tr>
				);
		}
	});