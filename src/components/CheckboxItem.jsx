import React from "react";

function CheckboxItem({task}) {
	return (
		<div className="checkbox">
			{task.done && (
				<svg width="24" height="24" viewBox="0 0 24 24" fill="#FFF">
					<path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
				</svg>
			)}
		</div>
	);
}

export default CheckboxItem;
