module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
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
