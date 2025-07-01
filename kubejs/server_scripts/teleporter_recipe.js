ServerEvents.recipes(event => {
    event.shaped(Item.of("mek1000:blank_teleporter"), [" S ", "STS", " S "], {
      S: "#forge:ingots/steel",
      T: "mekanism:teleporter",
    });

    event.shapeless("mek1000:blank_teleporter", ["mek1000:teleporter"]);

    event.shapeless("mek1000:flat_teleporter", [
      "mek1000:blank_teleporter",
      "minecraft:ender_pearl",
      "minecraft:dirt",
    ]);

    event.shapeless("mek1000:void_teleporter", [
      "mek1000:blank_teleporter",
      "minecraft:ender_pearl",
      "minecraft:obsidian",
    ]);
})