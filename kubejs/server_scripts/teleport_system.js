ItemEvents.rightClicked("mek1000:blank_teleporter", (event) => {
  event.getPlayer().setItemInHand(
    "main_hand",
    Item.of("mek1000:teleporter", 1, {
      teleport: {
        x: event.player.position().x(),
        y: event.player.position().y(),
        z: event.player.position().z(),
        dim: event.level.dimension.toString(),
      },
    })
  );
});

ItemEvents.rightClicked("mek1000:teleporter", (event) => {
  let teletag = event.item.nbt.getCompound("teleport");
  event.player.teleportTo(
    teletag.getString("dim"),
    teletag.getFloat("x"),
    teletag.getFloat("y"),
    teletag.getFloat("z"),
    event.player.yaw,
    event.player.pitch
  );

  event.player.addItemCooldown(event.item, 20);
});

ItemEvents.rightClicked("mek1000:flat_teleporter", (event) => {
  if (event.level.getDimension() != "1000mek:flat") {
    event.player.teleportTo(
      "1000mek:flat",
      event.player.position().x(),
      event.player.position().y(),
      event.player.position().z(),
      event.player.yaw,
      event.player.pitch
    );
  } else {
    event.player.teleportTo(
      "minecraft:overworld",
      event.level.getSharedSpawnPos().getX(),
      event.level.getSharedSpawnPos().getY(),
      event.level.getSharedSpawnPos().getZ(),
      event.player.yaw,
      event.player.pitch
    );
  }

  event.player.addItemCooldown(event.item, 20);
});

ItemEvents.rightClicked("mek1000:void_teleporter", (event) => {
  let playerX = event.player.position().x();
  let playerY = event.player.position().y();
  let playerZ = event.player.position().z();

  if (event.level.getDimension() != "1000mek:void") {
    event.player.teleportTo(
      "1000mek:void",
      Math.round(playerX),
      Math.round(playerY),
      Math.round(playerZ),
      event.player.yaw,
      event.player.pitch
    );

    if (
      event.server
        .getLevel("1000mek:void")
        .getBlock(Math.round(playerX), playerY - 1, Math.round(playerZ)) == "minecraft:air"
    ) {
        event.server
          .getLevel("1000mek:void")
          .getBlock(Math.round(playerX), playerY - 1, Math.round(playerZ)).set("minecraft:glass");
    }
  } else {
    event.player.teleportTo(
      "minecraft:overworld",
      event.level.getSharedSpawnPos().getX(),
      event.level.getSharedSpawnPos().getY(),
      event.level.getSharedSpawnPos().getZ(),
      event.player.yaw,
      event.player.pitch
    );
  }

  event.player.addItemCooldown(event.item, 20);
});
