module.exports = {
  presets: [
    // '@vue/cli-plugin-babel/preset',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        },
        modules: 'commonjs'
      },
    ]
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-async-generators',
    '@babel/plugin-proposal-nullish-coalescing-operator',
  ]
}
