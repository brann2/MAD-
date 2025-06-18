const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

<<<<<<< HEAD
const defaultConfig = getDefaultConfig(__dirname);
const {assetExts, sourceExts} = defaultConfig.resolver;

=======
>>>>>>> 2e409ca996044678eb549763335229b98dba1dd8
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
<<<<<<< HEAD
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve(
      'react-native-svg-transformer/react-native',
    ),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
};

module.exports = mergeConfig(defaultConfig, config);
=======
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
>>>>>>> 2e409ca996044678eb549763335229b98dba1dd8
