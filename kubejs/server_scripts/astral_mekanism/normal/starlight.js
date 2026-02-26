ServerEvents.recipes(event => {
    let starlights = ["coal", "diamond", "emerald", "fluorite", "lapis_lazuli", "quartz", "redstone", "iron", "gold", "copper", "tin", "lead", "uranium", "osmium"]

    starlights.forEach(value => {
        event.remove({ id: `astral_mekanism:processing/${value}/starlight` })
        if (value != "lapis_lazuli") {
            event.custom({
                type: "mekanism:reaction",
                itemInput: { amount: 64, ingredient: { item: `mek1000:${value}_singularity` } },
                fluidInput: { fluid: "astral_mekanism:mixed_lava", amount: 500000 },
                gasInput: { gas: "astral_mekanism:astral_ether", amount: 500000 },
                energyRequired: 20000000000000,
                duration: 400,
                "itemOutput": { "item": `astral_mekanism:starlight_${value}` },
            });
        }
    })

    event.custom({
        type: "mekanism:reaction",
        itemInput: { amount: 64, ingredient: { item: 'mek1000:amethyst_singularity' } },
        fluidInput: { fluid: "astral_mekanism:mixed_lava", amount: 500000 },
        gasInput: { gas: "astral_mekanism:astral_ether", amount: 500000 },
        energyRequired: 20000000000000,
        duration: 400,
        "itemOutput": { "item": 'mek1000:starlight_amethyst' },
    });

    event.custom({
        type: "mekanism:reaction",
        itemInput: { amount: 64, ingredient: { item: 'mek1000:iridium_singularity' } },
        fluidInput: { fluid: "astral_mekanism:mixed_lava", amount: 500000 },
        gasInput: { gas: "astral_mekanism:astral_ether", amount: 500000 },
        energyRequired: 20000000000000,
        duration: 400,
        "itemOutput": { "item": 'mek1000:starlight_iridium'},
    });

    event.custom({
        type: "mekanism:reaction",
        itemInput: { amount: 64, ingredient: { item: 'mek1000:lapis_singularity' } },
        fluidInput: { fluid: "astral_mekanism:mixed_lava", amount: 500000 },
        gasInput: { gas: "astral_mekanism:astral_ether", amount: 500000 },
        energyRequired: 20000000000000,
        duration: 400,
        "itemOutput": { "item": 'astral_mekanism:starlight_lapis_lazuli'},
    });
})