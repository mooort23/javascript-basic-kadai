
var items = [
  { name: 'トマト', price: 50, count: 3 },
  { name: 'なす', price: 60, count: 1 },
  { name: 'えび', price: 200, count: 1 },
  { name: 'ベーコン', price: 50, count: 2 }
];


// targetPriceより小計の高額な商品を出力
function higherPrice (targetPrice) {
  // ここにソースコードを追記しましょう
  for (let i = 0; i <= items.length; i++) {
    if (items[i].price * items[i].count > targetPrice ) {
      console.log(items[i].name);
    }
  }
}

higherPrice(120);


