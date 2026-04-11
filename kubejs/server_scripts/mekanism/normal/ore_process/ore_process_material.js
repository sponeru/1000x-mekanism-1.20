ServerEvents.recipes(event => {
    event.custom({
        type: "mekanism:chemical_infusing",
        chemicalType: "gas",
        leftInput: { gas: "astral_mekanism:aqua_regia", amount: 100 },
        rightInput: { gas: "mek1000:activated_redstone", amount: 1 },
        output: { gas: "mek1000:active_aqua_regia", amount: 100 },
    });

    event.custom({
        type: "mekanism:reaction",
        itemInput: { ingredient: { item: "minecraft:redstone" } },
        fluidInput: { fluid: "minecraft:water", amount: 1 },
        gasInput: { gas: "mekanism:steam", amount: 1 },
        energyRequired: 1,
        duration: 1,
        //        "itemOutput": { "item": 'minecraft:poppy' },
        gasOutput: { gas: "mek1000:activated_redstone", amount: 1 },
    });

    event.custom({
        type: "mekanism:reaction",
        itemInput: { ingredient: { item: "minecraft:redstone_block" } },
        fluidInput: { fluid: "minecraft:water", amount: 9 },
        gasInput: { gas: "mekanism:steam", amount: 9 },
        energyRequired: 1,
        duration: 8,
        //        "itemOutput": { "item": 'minecraft:poppy' },
        gasOutput: { gas: "mek1000:activated_redstone", amount: 9 },
    });


})