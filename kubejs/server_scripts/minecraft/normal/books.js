ServerEvents.recipes((event) => {
    event.shaped(Item.of('minecraft:enchanted_book').enchant('g_abun:absolutelyunbreakable', 1),
        [
            "NNN",
            "NBN",
            "NNN"
        ], {
        B: "minecraft:book",
        N: "minecraft:netherite_block",
    });
});
