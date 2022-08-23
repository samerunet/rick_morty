const Episode = (props) => {
	return (
		<div className='episode'>
			<p>{props.episode.name}</p>
			<p>{props.episode.air_date}</p>
			<p>{props.episode.episode}</p>
			<p>{props.episode.created}</p>
		</div>
	);
};

export default Episode;
