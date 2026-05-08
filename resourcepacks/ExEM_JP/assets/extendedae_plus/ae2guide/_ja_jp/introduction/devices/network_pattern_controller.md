---
navigation:
  parent: introduction/index.md
  title: プロバイダーコントローラー
  position: 3
  icon: extendedae_plus:network_pattern_controller
categories:
  - extendedae_plus devices
item_ids:
  - extendedae_plus:network_pattern_controller
---

# プロバイダーコントローラー

<BlockImage id="extendedae_plus:network_pattern_controller" scale="5" />

**プロバイダーコントローラー**は、これ一つでネットワーク内の全てのパターンプロバイダーを制御する中央制御ユニットです。

## GUI & 操作

![Pattern Provider Status Controller Interface](../../picture/network_pattern_controller.png)

このコントローラーから、以下の操作ができます:

### モード変更
- **ブロックモード**: 全てのパターンプロバイダーの「ブロックモード」を有効・無効にします。
- **スマートブロッキング**: 全てのパターンプロバイダーの「スマートブロッキング」を有効・無効にします。
- **スマートスケーリング**: 全てのパターンプロバイダーの「スマートスケーリング」を有効・無効にします。

### 一括処理
- **全て有効**: 上3つの機能をすべて有効にします。
- **全て無効**: 上3つの機能をすべて無効にします。

## 使い方
1. **プロバイダーコントローラー**をMEネットワークに接続する。
2. コントローラーを右クリックしてGUIを開く。
3. ボタンをクリックして、全てのプロバイダーの設定を一括で行う。

> **注**: このコントローラーは、ネットワーク内の**全ての**パターンプロバイダーに影響を与えます。個別に設定したいときは、各プロバイダーのUIから設定してください。
