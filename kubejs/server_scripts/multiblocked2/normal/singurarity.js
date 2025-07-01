ServerEvents.recipes((event) => {
    let material = [
        "quartz",
        "iron",
        "coal",
        "diamond",
        "emerald",
        "lapis",
        "copper",
        "amethyst",
        "redstone",
        "fluorite",
        "osmium",
        "tin",
        "lead",
        "uranium",
        "gold",
        "iridium"
    ]

    let id = 0

    material.forEach(item => {
        event.recipes.mek1000.singurarity_generate()
            .id("mek1000:recipe_singurarity_" + id)
            .duration(20 * 0.5)
            .outputItems('mek1000:' + item + '_singularity')
            .inputGases("2147483647x mek1000:vaporized_" + item)

        id = id + 1
    })

    event.recipes.mek1000.singurarity_generate()
        .id("mek1000:recipe_singurarity10")
        .duration(20 * 0.5)
        .outputItems('mek1000:certusquartz_singularity')
        .inputGases("2147483647x mek1000:vaporized_certus")
})