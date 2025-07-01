ServerEvents.recipes(event => {
    let dye = ['minecraft:white_dye', 'minecraft:light_gray_dye', 'minecraft:gray_dye', 'minecraft:black_dye', 'minecraft:brown_dye', 'minecraft:red_dye', 'minecraft:orange_dye', 'minecraft:yellow_dye', 'minecraft:lime_dye', 'minecraft:green_dye', 'minecraft:cyan_dye', 'minecraft:light_blue_dye', 'minecraft:blue_dye', 'minecraft:purple_dye', 'minecraft:magenta_dye', 'minecraft:pink_dye']

    dye.forEach(item => {
        event.stonecutting(item, 'mek1000:ultimate_dye_base')
    })
})