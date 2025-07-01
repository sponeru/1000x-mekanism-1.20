StartupEvents.registry("mekanism:slurry", event => {
    event.create('mek1000:dirty_compressed_iron').texture("mekanism:slurry/dirty").color(0xf0f8ff)
    event.create('mek1000:dirty_compressed_copper').texture("mekanism:slurry/dirty").color(0xf0f8ff)
    event.create('mek1000:dirty_compressed_gold').texture("mekanism:slurry/dirty").color(0xF2CD67)
    event.create('mek1000:dirty_compressed_osmium').texture("mekanism:slurry/dirty").color(0x52BDCA)
    event.create('mek1000:dirty_compressed_tin').texture("mekanism:slurry/dirty").color(0xCCCCD9)
    event.create('mek1000:dirty_compressed_lead').texture("mekanism:slurry/dirty").color(0xf0f8ff)
    event.create('mek1000:dirty_compressed_uranium').texture("mekanism:slurry/dirty").color(0xf0f8ff)

    event.create('mek1000:clean_compressed_iron').texture("mekanism:slurry/clean").color(0xf0f8ff)
    event.create('mek1000:clean_compressed_copper').texture("mekanism:slurry/clean").color(0xf0f8ff)
    event.create('mek1000:clean_compressed_gold').texture("mekanism:slurry/clean").color(0xF2CD67)
    event.create('mek1000:clean_compressed_osmium').texture("mekanism:slurry/clean").color(0x52BDCA)
    event.create('mek1000:clean_compressed_tin').texture("mekanism:slurry/clean").color(0xCCCCD9)
    event.create('mek1000:clean_compressed_lead').texture("mekanism:slurry/clean").color(0xf0f8ff)
    event.create('mek1000:clean_compressed_uranium').texture("mekanism:slurry/clean").color(0xf0f8ff)

    event.create('mek1000:dirty_compressed_iridium').texture("mekanism:slurry/dirty").color(0xf0f8ff)
    event.create('mek1000:clean_compressed_iridium').texture("mekanism:slurry/clean").color(0xf0f8ff)

    event.create('mek1000:dirty_compressed_debri').texture("mekanism:slurry/dirty").color(0x754317)
    event.create('mek1000:clean_compressed_debri').texture("mekanism:slurry/clean").color(0x754317)

    event.create('mek1000:dirty_redstone').texture("mekanism:slurry/dirty").color(0xf00000)
    event.create('mek1000:clean_redstone').texture("mekanism:slurry/clean").color(0xf00000)
    event.create('mek1000:dirty_certus_quartz').texture("mekanism:slurry/dirty").color(0xc0e0f0)
    event.create('mek1000:clean_certus_quartz').texture("mekanism:slurry/clean").color(0xc0e0f0)
    event.create('mek1000:dirty_fluorite').texture("mekanism:slurry/dirty").color(0xe0d0f0)
    event.create('mek1000:clean_fluorite').texture("mekanism:slurry/clean").color(0xe0d0f0)
    event.create('mek1000:dirty_quartz').texture("mekanism:slurry/dirty").color(0xe0d0d0)
    event.create('mek1000:clean_quartz').texture("mekanism:slurry/clean").color(0xe0d0d0)

    event.create(`mek1000:dirty_coal`).texture("mekanism:slurry/dirty").color(0x333333)
    event.create(`mek1000:clean_coal`).texture("mekanism:slurry/clean").color(0x333333)
    event.create(`mek1000:dirty_diamond`).texture("mekanism:slurry/dirty").color(0x22a0f0)
    event.create(`mek1000:clean_diamond`).texture("mekanism:slurry/clean").color(0x22a0f0)
    event.create(`mek1000:dirty_lapis`).texture("mekanism:slurry/dirty").color(0x3333f0)
    event.create(`mek1000:clean_lapis`).texture("mekanism:slurry/clean").color(0x3333f0)
    event.create(`mek1000:dirty_emerald`).texture("mekanism:slurry/dirty").color(0x22f050)
    event.create(`mek1000:clean_emerald`).texture("mekanism:slurry/clean").color(0x22f050)

    let types = [ // ["name",0x color]
        ["iron", 0xfafafa], ["copper", 0xdea924], ["gold", 0xffdedb], ["osmium", 0x63cedb], ["tin", 0xddddea], ["lead", 0x63a2a4], ["uranium", 0x9cff9c], ["iridium", 0xf3ff80],
        ["redstone", 0xff2020], ["quartz", 0xffc0b1], ["certus_quartz", 0xb1c0ff], ["fluorite", 0xffb0ff],
        ["coal", 0x444444], ["lapis", 0x4444ff], ["diamond", 0x33b1ff], ["emerald", 0x33ff61], ["debri", 0xa34f05]]
    types.forEach(type => {
        event.create(`mek1000:prec_${type[0]}`).texture("mekanism:slurry/clean").color(type[1]).displayName(`precipitated ${type[0]}`)
        event.create(`mek1000:prec_compress_${type[0]}`).texture("mekanism:slurry/clean").color(type[1]).displayName(`precipitated compress ${type[0]}`)
    })
})