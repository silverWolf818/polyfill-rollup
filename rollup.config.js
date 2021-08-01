import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonJS from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist.js',
        format: 'iife'
    },
    plugins: [
        babel({babelHelpers: 'bundled'}),
        nodeResolve(),
        commonJS(),
        // terser(),
    ],
};