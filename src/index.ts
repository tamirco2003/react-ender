import { useEffect, useState } from 'react';

export function createEnder<T>(initialValue: T): EnderHook<T> {
	let value = initialValue;
	let observers: Observers = {};
	let observerIdCounter = 0;

	function updateEnderState(state: T) {
		value = state;
		Object.keys(observers).forEach((id) => observers[id](value));
	}

	return () => {
		const [enderState, setEnderState] = useState<T>(value);

		useEffect(() => {
			let id = (observerIdCounter++).toString();
			observers[id] = setEnderState;

			return () => {
				delete observers[id];
			};
		}, []);

		return [enderState, updateEnderState];
	};
}
