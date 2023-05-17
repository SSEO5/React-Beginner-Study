import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, year, rating, summary, genres }) {
	return (
		<div className={styles.movie}>
			<img src={coverImg} alt={title} className={styles.movie__img} />
			<div>
				<h2 className={styles.movie__title}>
					<Link to={`/movie/${id}`}>{title}</Link>
				</h2>
				<h3 className={styles.movie__year}>{year}</h3>
				<div className={styles.star__rating}>
					{Array.from({
						length: Math.floor(rating / 2),
					}).map((_, index) => (
						<span key={index}>&#9733;</span>
					))}
				</div>
				<p className={styles.movie__summary}>
					{summary.length > 100
						? `${summary.slice(0, 100)}...`
						: summary}
				</p>
				<ul className={styles.movie__genres}>
					{genres.map((g) => (
						<li key={g} className={styles.movie__genre}>
							{g}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
