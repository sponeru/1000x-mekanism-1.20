---
navigation:
  parent: expandedae-index.md
  title: Expanded IO Port
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

An even better IO Port that allows you to transfer great amounts of anything very quickly.
Can be useful for making lots of singularities in the <ItemLink id="ae2:condenser" />.
Check the table below for exact values!

| Amount of Upgrades | Transfer Speed | Transfer Speed but readable |
|--------------------|----------------|-----------------------------|
| 0                  | 4,194,303      | MAX_INT / 512               |
| 1                  | 8,388,606      | MAX_INT / 256               |
| 2                  | 33,554,424     | MAX_INT / 64                |
| 3                  | 134,217,696    | MAX_INT / 16                |
| 4                  | 536,870,784    | MAX_INT / 4                 |
| 5                  | 2,147,483,136  | MAX_INT                     |

_Note: For Java, Integer.MAX_VALUE, in this case being MAX_INT, is 2,147,483,647_