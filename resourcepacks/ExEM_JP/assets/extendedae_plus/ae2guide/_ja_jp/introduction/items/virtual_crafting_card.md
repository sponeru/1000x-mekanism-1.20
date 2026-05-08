---
navigation:
  parent: introduction/index.md
  title: 仮想クラフトカード
  position: 3
  icon: extendedae_plus:virtual_crafting_card
categories:
  - extendedae_plus items
item_ids:
  - extendedae_plus:virtual_crafting_card
---

# 仮想クラフトカード

<Row>
  <ItemImage id="extendedae_plus:virtual_crafting_card" scale="4" />
</Row>

仮想クラフトカードはパターンプロバイダーのアップグレードであり、結果を戻す必要がない注文において、その注文を即座に完了させます。
## 機能と効果

- **自動完了**: プロバイダーが素材を発送しようとしており、かつそのレシピがMEネットワークへの結果を返す必要がない時、注文は即座に完了されます。
- **メモリ解放**: クラフティングCPUのクラフト用メモリを即座に開放し、その後の注文を可能にします。
- **1枚制限**: 一つの(拡張型)パターンプロバイダーにつき、1枚のみインストールできます。

## 使用例

| 状況 | 説明 |
| :--- | :--- |
| マルチブロック建設 | 建材は配送先へ発送されると自動的に注文完了になるため、確認のためにアイテムを返してもらう必要はありません。 |
| 手動クラフト補助 | 自動化できないアイテムの素材(ネザースターやエンチャント本など)を近くのチェストまで送り、自動的に注文を完了します。 |
| 一括ブロック設置 | 大量の建材をインベントリに収納し、出来たら注文の自動完了をします。 |
| 自動生産ラインへの供給 | 自動生産ラインの消耗品(かまどの燃料、経験値の瓶、水など)を補充し、自動的に完了します。 |

## インストール可能な部品

- <ItemLink id="ae2:pattern_provider" />
- <ItemLink id="ae2:cable_pattern_provider" />
- <ItemLink id="expatternprovider:ex_pattern_provider" />
- <ItemLink id="expatternprovider:ex_pattern_provider_part" />

## レシピ

<RecipesFor id="extendedae_plus:virtual_crafting_card" />
