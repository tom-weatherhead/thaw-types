// rollup.config.js

/**
 * Copyright (c) Tom Weatherhead. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */

'use strict';

import { terser } from 'rollup-plugin-terser';

export default {
	input: './dist/types/main.js',
	output: [
		{
			// Create a CommonJS version for Node.js
			file: 'dist/thaw-types.cjs.js',
			format: 'cjs',
			exports: 'named'
		},
		{
			// Create an ESModule version
			file: 'dist/thaw-types.esm.js',
			format: 'es',
			esModule: true,
			compact: true,
			plugins: [terser()]
		},
		{
			// Create a version that can run in Web browsers
			file: 'dist/thaw-types.js',
			name: 'thaw-types',
			format: 'umd',
			compact: true,
			plugins: [terser()]
		}
	]
	// , context: 'this'
};
