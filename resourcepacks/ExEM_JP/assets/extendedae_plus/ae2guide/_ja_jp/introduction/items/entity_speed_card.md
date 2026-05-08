---
navigation:
  parent: introduction/index.md
  title: 世界加速カード
  position: 6
  icon: extendedae_plus:entity_speed_card
categories:
  - extendedae_plus items
item_ids:
  - extendedae_plus:entity_speed_card
---

# 世界加速カード

<Row>
  <ItemImage id="extendedae_plus:entity_speed_card" tag="{'EAS:mult':2}" scale="3" />
  <ItemImage id="extendedae_plus:entity_speed_card" tag="{'EAS:mult':4}" scale="3" />
  <ItemImage id="extendedae_plus:entity_speed_card" tag="{'EAS:mult':8}" scale="3" />
  <ItemImage id="extendedae_plus:entity_speed_card" tag="{'EAS:mult':16}" scale="3" />
</Row>

**世界加速カード**は、<ItemLink id="extendedae_plus:entity_speed_ticker" />に挿入してブロックを加速させるアップグレードカードです。カードのティアによって、世界加速装置が加速できる**最大の倍率**が決まります。

## ティア & 効果

世界加速装置は**同時に4枚まで**世界加速カードを挿入できます。最終的な加速率は **全ての加速カードの倍率の積**になりますが、**一番高い倍率のカード**によって決められた、加速制限を超えることは**できません**。

| 世界加速カード | 1つ当たりの加速率 | 加速制限 (カードごとに) |
| :--- | :--- | :--- |
| 世界加速カード (x2) | ×2 | ×8 |
| 世界加速カード (x4) | ×4 | ×64 |
| 世界加速カード (x8) | ×8 | ×256 |
| 世界加速カード (x16) | ×16 | ×1024 |

> **異なる倍率加速カードが挿入されたときのルール**:  
> 異なる倍率の加速カードを同時に挿入したとき、加速率は全ての加速率を掛けたものになりますが、倍率が一番高いカードの**加速制限**を超えることはできません。
>
> **例**: **x2 を一つ**と**x4 を3つ**挿入したとき
>
> - 倍率を計算: 2 × 4³ = 128
> - 一番高い倍率のカード: **x4**、加速制限は **×64**
> - **実際の加速率 = ×64**

## レシピ
<RecipesFor id="extendedae_plus:entity_speed_card" />