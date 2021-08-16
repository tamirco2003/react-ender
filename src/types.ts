interface Observers {
	[id: string]: Function;
}

type EnderSetter<T> = (state: T) => void;
type EnderHook<T> = () => [T, EnderSetter<T>];