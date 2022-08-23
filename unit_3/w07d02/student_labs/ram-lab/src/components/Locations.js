const Location = (props) => {
	return (
		<div className='location'>
			<h2>{props.location.dimension}</h2>
			<p>{props.location.name}</p>
			<p>{props.location.type}</p>
		</div>
	);
};

export default Location;
