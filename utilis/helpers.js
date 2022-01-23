export const url = "http://localhost:3000";
export const apiUrl = "http://localhost:4000";

export function getStorage(key) {
	let stored = localStorage.getItem(key);
	if (stored) {
		stored = JSON.parse(stored);
	} else {
		stored = null;
	}
	return stored;
}

export function postStorage({ key, value }) {
	localStorage.setItem(key, JSON.stringify(value));
}
