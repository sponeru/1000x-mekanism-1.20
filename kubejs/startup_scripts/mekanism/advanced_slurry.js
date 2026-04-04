StartupEvents.registry("mekanism:slurry", event => {
    let slurry = [
        ["iron", 0xf0f8ff],
        ["copper", 0xf0f8ff],
        ["gold", 0xF2CD67],
        ["osmium", 0x52BDCA],
        ["tin", 0xCCCCD9],
        ["lead", 0xf0f8ff],
        ["uranium", 0xf0f8ff],
        ["iridium", 0xf0f8ff],
        ["debri", 0x754317],
    ]

    let slurry_gem = [
        ["redstone", 0xf00000],
        ["certus_quartz", 0xc0e0f0],
        ["fluorite", 0xe0d0f0],
        ["quartz", 0xe0d0d0],
        ["coal", 0x333333],
        ["diamond", 0x22a0f0],
        ["lapis", 0x3333f0],
        ["emerald", 0x22f050],
    ]

    slurry.forEach(element => {
        event.create(`mek1000:dirty_compressed_${element[0]}`)
            .texture("mekanism:slurry/dirty")
            .color(element[1])
            .displayName(Text.translate("mek1000.dirty_compressed_slurry.name", Text.translate(`mek1000.material.${element[0]}`)))

        event.create(`mek1000:clean_compressed_${element[0]}`)
            .texture("mekanism:slurry/clean")
            .color(element[1])
            .displayName(Text.translate("mek1000.clean_compressed_slurry.name", Text.translate(`mek1000.material.${element[0]}`)))
    });

    slurry_gem.forEach(element =>{
        event.create(`mek1000:dirty_compressed_${element[0]}`)
            .texture("mekanism:slurry/dirty")
            .color(element[1])
            .displayName(Text.translate("mek1000.dirty_compressed_slurry.name", Text.translate(`mek1000.material.${element[0]}`)))

        event.create(`mek1000:clean_compressed_${element[0]}`)
            .texture("mekanism:slurry/clean")
            .color(element[1])
            .displayName(Text.translate("mek1000.clean_compressed_slurry.name", Text.translate(`mek1000.material.${element[0]}`)))

        event.create(`mek1000:dirty_${element[0]}`)
            .texture("mekanism:slurry/dirty")
            .color(element[1])
            .displayName(Text.translate("mek1000.dirty_slurry.name", Text.translate(`mek1000.material.${element[0]}`)))

        event.create(`mek1000:clean_${element[0]}`)
            .texture("mekanism:slurry/clean")
            .color(element[1])
            .displayName(Text.translate("mek1000.clean_slurry.name", Text.translate(`mek1000.material.${element[0]}`)))
    })

    let types = [ // ["name",0x color]
        ["iron", 0xfafafa], ["copper", 0xdea924], ["gold", 0xffdedb], ["osmium", 0x63cedb], ["tin", 0xddddea], ["lead", 0x63a2a4], ["uranium", 0x9cff9c], ["iridium", 0xf3ff80],
        ["redstone", 0xff2020], ["quartz", 0xffc0b1], ["certus_quartz", 0xb1c0ff], ["fluorite", 0xffb0ff],
        ["coal", 0x444444], ["lapis", 0x4444ff], ["diamond", 0x33b1ff], ["emerald", 0x33ff61], ["debri", 0xa34f05]]
    types.forEach(type => {
        event.create(`mek1000:prec_${type[0]}`).texture("mekanism:slurry/clean").color(type[1]).displayName(`precipitated ${type[0]}`)
        event.create(`mek1000:prec_compress_${type[0]}`).texture("mekanism:slurry/clean").color(type[1]).displayName(`precipitated compress ${type[0]}`)
    })
})