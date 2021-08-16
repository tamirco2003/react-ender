# React Ender

The simplest global state. Literally.

## Overview

**React Ender** is a simple library that lets you create _enders,_ which are "chests" of state that can be shared interdimensionally.

Basically, you make an ender, you use the ender wherever you need the data.

That simple.

## Usage

To make a new ender, simply use the `createEnder` function:

```js
let useDataEnder = createEnder('initial state goes here!');
```

now, to use the ender, simply call your new ender hook anywhere you need to!

```js
let [data, setData] = useDataEnder();
```

updating the ender using the returned function (in this case, `setData`) will cause all components who use the ender to rerender.

That's it.

## That's it?

Want to share state between 2 components far, far away on the tree?

No more lifting it up to infinity, just let the data travel across dimensions with **_React Ender._**

## How does it work?

Check it out for yourself, it's practically a one-file library.

It simply uses the observer pattern to bind component state and shared state together.

## Another example please!

You got it!

`stores.js`

```js
export const useCounterEnder = createEnder(0);
```

`CounterButton.js`

```js
import { useCounterEnder } from './stores.js';

function CounterButton() {
	let [counter, setCounter] = useCounterEnder();

	return <button onClick={() => setCounter(counter + 1)}>{counter}</button>;
}

export default CounterButton;
```

`App.js`

```js
import CounterButton from './CounterButton';

function App() {
	return (
		<div id="App">
			<CounterButton />
			<CounterButton />
			<CounterButton />
		</div>
	);
}
```

And the results...

https://i.imgur.com/Q5Lv841.mp4