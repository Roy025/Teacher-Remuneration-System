import React from 'react';
import { Button } from '../Buttons/Button';
import { Link } from 'react-router-dom';
import './PageBlock.css';

function PageBlock({
	blockTheme,
	topLine,
	textTheme,
	textDescriptionTheme,
	headline,
	description,
	buttonLabel,
	imageSource,
	alt,
	imageStartLocation,
	url
}) {
	return (
		<>
			<div className={blockTheme}>
				<div className="Container">
					<div
						className="Row Home-block-row"
						style={{
							display: 'flex',
							flexDirection:
								imageStartLocation === 'start' ? 'row' : 'row-reverse',
						}}>
						<div className="Col">
							<div className="Home-block-text-wrapper">
								<div className="Top-line">{topLine}</div>
								<h1 className={textTheme}>{headline}</h1>
								<p className={textDescriptionTheme}>{description}</p>
								<Link to={url}>
									<Button
										buttonSize="btn--wide"
										buttonColor="blue"
										buttonStyle="btn--primary">
										{buttonLabel}
									</Button>
								</Link>
							</div>
						</div>
						<div className="Col">
							<div className="Home-block-image-wrapper">
								<img
									src={require(`${imageSource}`)}
									alt={alt}
									className="Home-block-image"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default PageBlock;
