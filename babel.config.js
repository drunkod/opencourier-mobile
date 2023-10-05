module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'add-react-displayname',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@app': './src',
        },
      },
    ],
  ],
};
