//In addition to adding infinity cell for one item, you can also add infinities cell for multiple items
StartupEvents.registry("item", event => {
    let concrete = ['minecraft:white_concrete', 'minecraft:light_gray_concrete', 'minecraft:gray_concrete', 'minecraft:black_concrete', 'minecraft:brown_concrete', 'minecraft:red_concrete', 'minecraft:orange_concrete', 'minecraft:yellow_concrete', 'minecraft:lime_concrete', 'minecraft:green_concrete', 'minecraft:cyan_concrete', 'minecraft:light_blue_concrete', 'minecraft:blue_concrete', 'minecraft:purple_concrete', 'minecraft:magenta_concrete', 'minecraft:pink_concrete']
    let chisel_building = ['chisel_chipped_integration:factory_dotted_rusty_plate', 'chisel_chipped_integration:laboratory_white_panel', 'chisel_chipped_integration:technical_caution_framed_plates', 'chisel_chipped_integration:tyrian_disordered_metal_bits', 'chisel_chipped_integration:futura_gray_screen']

    event.create("mek1000:rainbow_concrete_drive", "meinfinitycell:infinities_cell").setName(Text.literal("Rainbow Concrete")).setKeys(KeyList.create().adds(
        keys => {
            concrete.forEach(value => {
                keys.add(AEKeyHelper.item(value))
            })
        }
    ))

    event.create("mek1000:stone_drive", "meinfinitycell:infinities_cell").setName(Text.literal("Stone")).setKeys(KeyList.create().adds(
        keys => {
            keys.add(AEKeyHelper.item("minecraft:cobblestone"))
            keys.add(AEKeyHelper.item('minecraft:stone'))
            keys.add(AEKeyHelper.item('minecraft:smooth_stone'))
            keys.add(AEKeyHelper.item('xtonesreworked:xtone_tile'))
        }))

    event.create("mek1000:stonework_drive", "meinfinitycell:infinities_cell").setName(Text.literal("Stoneworks")).setKeys(KeyList.create().adds(
        keys => {
            keys.add(AEKeyHelper.item("minecraft:gravel"))
            keys.add(AEKeyHelper.item('minecraft:sand'))
            keys.add(AEKeyHelper.item('minecraft:obsidian'))
            keys.add(AEKeyHelper.fluid('minecraft:lava'))
        }))

    event.create("mek1000:chisel_building_block_drive", "meinfinitycell:infinities_cell").setName(Text.literal("Chisel Building Block")).setKeys(KeyList.create().adds(
        keys => {
            chisel_building.forEach(value => {
                keys.add(AEKeyHelper.item(value))
            })
        }))

    event.create("mek1000:evaporation_drive", "meinfinitycell:infinities_cell").setName(Text.literal("Evaporation")).setKeys(KeyList.create().adds(
        keys => {
            keys.add(MekanismKeyHelper.gas("mekanism:oxygen"))
            keys.add(MekanismKeyHelper.gas("mekanism:hydrogen"))
            keys.add(MekanismKeyHelper.gas("mekanism:sodium"))
            keys.add(MekanismKeyHelper.gas("mekanism:hydrogen_chloride"))
            keys.add(MekanismKeyHelper.gas("mekanism:chlorine"))
        }))
})