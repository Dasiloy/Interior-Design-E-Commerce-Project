import { useState, useEffect } from "react";

function useOverflow(params) {
	useEffect(() => {
		if (params) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [params]);
}

export default useOverflow;
