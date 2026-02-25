StartupEvents.registry("mekanism:gas", event => {
    event.create('mek1000:valine3g').fuel(2, 57729).color(0x9f9ea4)
    event.create('mek1000:saltless_dried_soysouce').fuel(200, 4382750).color(0x45281d)
    event.create('mek1000:soysauce').fuel(1, 5).color(0x15080d)
    event.create('mek1000:dvt').fuel(10, 2147483647).color(0xdda0dd).displayName('DVT fuel')
    event.create('mek1000:astral_valine3g').fuel(1000, 2147483647).color(0xffd4fe).displayName('Astral Infused Valine3g')
})
