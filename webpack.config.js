const env = process.env.NODE_ENV || 'development'
const isDevelopment = env === 'development'

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: env,

  target: 'node',

  devtool: isDevelopment ? 'source-map' : false,

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: isDevelopment ? {
    'public/development': './src/main.ts'
  } : {
    'public/production': './src/main.ts'
  },

  output: {
    path: __dirname,
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: 'ts-loader',
      },
    ],
  },
  // import 文で .ts ファイルを解決するため
  // これを定義しないと import 文で拡張子を書く必要が生まれる。
  // フロントエンドの開発では拡張子を省略することが多いので、
  // 記載したほうがトラブルに巻き込まれにくい。
  resolve: {
    // 拡張子を配列で指定
    extensions: [
      '.ts', '.js',
    ],
  },
};
