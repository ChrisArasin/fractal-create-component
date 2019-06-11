# fractal-create-component
Custom [Fractal](https://fractal.build/) command that Creates a new component directory and files.

## Setup
In `fractal.js`, run `init` function, passing fractal object:
```
const fractalCreateComponent = require('./fractal-create-component');
fractalCreateComponent.init(fractal);
```

## Usage
In desired component parent directory, run `fractal cc <component-name>` or `fractal create-component <component-name>` to create the `component-name` directory with a `.scss`, `.twig`, and `.config.js` file.
