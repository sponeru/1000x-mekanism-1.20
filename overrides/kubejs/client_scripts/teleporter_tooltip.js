let dimtrans = {
  "minecraft:overworld": "mek1000.dim.overworld",
  "1000mek:void": "mek1000.dim.void",
  "1000mek:flat": "mek1000.dim.flat",
  "javd:void": "mek1000.dim.old_void",
};

ItemEvents.tooltip((event) => {
    event.addAdvanced("mek1000:teleporter", (item, advanced, text) => {

    text.add(1, Text.translate("mek1000.teleporter.desc"));
        
    let teletag = item.nbt.getCompound("teleport");
    text.add(
      2,
      Text.translate(
        "mek1000.teleport.desc.dim",
        Text.translate(dimtrans[teletag.getString("dim")])
      )
    );
    text.add(
      3,
      Text.translate(
        "mek1000.teleport.desc.x",
        Math.round(teletag.getFloat("x"))
      )
    );
    text.add(
      4,
      Text.translate(
        "mek1000.teleport.desc.y",
        Math.round(teletag.getFloat("y"))
      )
    );
    text.add(
      5,
      Text.translate(
        "mek1000.teleport.desc.z",
        Math.round(teletag.getFloat("z"))
      )
    );
    });
    
    event.add(
      "mek1000:flat_teleporter",
      Text.translate("mek1000.teleporter.desc")
    );

    event.add(
      "mek1000:void_teleporter",
      Text.translate("mek1000.teleporter.desc")
    );

    event.add(
      "mek1000:blank_teleporter",
      Text.translate("mek1000.teleporter.register.desc")
    );
});