---
navigation:
  title: 冶金吹込機の自動化
  icon: mekanism:metallurgic_infuser
  parent: index.md
---

# 冶金吹込機の自動化

<GameScene zoom="4" interactive={true}>
    <ImportStructure src="metallurgic_infuser_automation.nbt" />
    <IsometricCamera yaw="70" pitch="30" />

    <BlockAnnotation x="0" y="0" z="1">
    余剰な吹き込みガスを保存するために化学物質セルを入れておくこと！
    </BlockAnnotation>

    <BlockAnnotation x="0" y="0" z="3">
    上面のアイテム・吹き込みガスを**搬入出**にする
    </BlockAnnotation>

    <BlockAnnotation x="0" y="0" z="5">
    上面のアイテムを**その他**にする

    右面の吹き込みガスを**搬出**にする
    </BlockAnnotation>
</GameScene>

---

冶金吹込機は、加圧チューブを使うことで吹き込みガスを搬出させることができます。

また、MEパターンプロバイダーから吹き込みガスを搬入することもできます。

---

**吹き込みガスに変換するためだけ**の冶金吹込機を設置し、加圧チューブでMEネットワークに取り込むことで自動クラフトに上手に組み込むことができます。