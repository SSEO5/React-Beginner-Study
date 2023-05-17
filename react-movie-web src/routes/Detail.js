import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState([]);
	const { id } = useParams();
	const getMovie = useCallback(async () => {
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
			)
		).json();
		setMovie(json.data.movie);
		setLoading(false);
	}, [id]);
	useEffect(() => {
		getMovie();
	}, [getMovie]);
	return (
		<div className={styles.container}>
			{loading ? (
				<div className={styles.loader}>
					<span>Loading...</span>
				</div>
			) : (
				<div className={styles.movie}>
					<ul className={styles.movie__genres}>
						{movie.genres.map((g) => (
							<li key={g} className={styles.movie__genre}>
								{g}
							</li>
						))}
					</ul>
					<div>
						<img
							src={movie.medium_cover_image}
							alt={movie.title}
							className={styles.movie__img}
						/>
					</div>
					<div>
						<h1 className={styles.movie__title}>
							{movie.title_long}
						</h1>
						<div className={styles.star__rating}>
							{Array.from({
								length: Math.floor(movie.rating / 2),
							}).map((_, index) => (
								<span key={index}>&#9733;</span>
							))}
						</div>
						<p className={styles.movie__summary}>
							{movie.description_full}
						</p>
					</div>
				</div>
			)}
		</div>
	);
}
export default Detail;
