---
navigation:
    parent: epp_intro/epp_intro-index.md
    title: ME缶詰機
    icon: expatternprovider:caner
categories:
- extended devices
item_ids:
- expatternprovider:caner
---

# ME缶詰機

<BlockImage id="expatternprovider:caner" scale="8"></BlockImage>

ME缶詰機は、液体やMekanismのガス、Botaniaのマナ、FEまでもを「缶詰め」にする機械です！

左のスロットで何に詰めるかを設定し、右のスロットで何を詰めるかを設定します。

1回の動作に80AEを消費します。

![GUI](../pic/caner_gui.png)

通常では液体のみを扱います。他のものを扱うには、対応するmodを導入する必要があります。

### 対応mod:
- Applied Flux
- Applied Mekanistics
- Applied Botanics Addon

## ME缶詰機を使った自動クラフト

上面か下面からのみ電力やネットワークを通します。

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../structure/caner_example.snbt"></ImportStructure>
</GameScene>

自動クラフトの一例です。<ItemLink id="ae2:pattern_provider" />から素材を受け取ると、結果を自動的に出力します。

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../structure/caner_auto.snbt"></ImportStructure>
</GameScene>

パターンには、内容物と容器を設定する必要があります。例を示します:

水バケツ:

![P1](../pic/fill_water.png)

充電されたエネルギータブレット (Applied Fluxが必要):

![P1](../pic/fill_energy.png)


## 開封

逆に、中身を空にすることもできます。パターンを設定するときは素材と結果を先ほどの逆にしましょう。
