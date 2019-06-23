## usage

```JS
// こんな感じでイベントを登録
click_ripple([
  {
    target: '.linkA',  // 波紋イベントを登録する要素
    color: 'blue', // 波紋の色
    duration: 500, // アニメーションの時間（ミリ秒）
    size: 150 // 波紋のサイズ（px）
  },
  {
    target: '.linkB', 
    color: 'yellow',
    duration: 1000,
    size: 100
  }
]);

```
