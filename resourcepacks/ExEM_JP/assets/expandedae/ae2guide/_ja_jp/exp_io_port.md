---
navigation:
  parent: expandedae-index.md
  title: 強化拡張型入出力ポート
  icon: exp_io_port
  position: 1
categories:
  - expandedae
item_ids:
- expandedae:exp_io_port
---

<GameScene zoom="4" background="transparent">
  <ImportStructure src="structures/exp_io_port.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

# 強化拡張型入出力ポート

あらゆるデータを非常に高速に転送できる、さらに高性能な入出力ポートです。<ItemLink id="ae2:condenser" />で大量のシンギュラリティを作成するときに役立ちます。 正確な数値は下の表を参照してください！

| スピードアップグレード | 転送速度 | 転送速度(MAX_INTと比べて) |
|--------------------|----------------|-----------------------------|
| 0                  | 4,194,303      | MAX_INT / 512               |
| 1                  | 8,388,606      | MAX_INT / 256               |
| 2                  | 33,554,424     | MAX_INT / 64                |
| 3                  | 134,217,696    | MAX_INT / 16                |
| 4                  | 536,870,784    | MAX_INT / 4                 |
| 5                  | 2,147,483,136  | MAX_INT                     |

_付記: Javaでは、Integer.MAX\_VALUE(表の中ではMAX\_INT)は2,147,483,647という整数になっています。_