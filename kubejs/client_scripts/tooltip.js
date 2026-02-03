ItemEvents.tooltip((event) => {
  event.add("mek1000:sml_drill_s", [
    Text.translate("mek1000.sml_drill.desc"),
    Text.translate("mek1000.sml_drill_s.desc").lightPurple(),
    Text.translate("mek1000.multi.desc").aqua(),
  ]);
  event.add("mek1000:sml_drill_m", [
    Text.translate("mek1000.sml_drill.desc"),
    Text.translate("mek1000.sml_drill_m.desc").lightPurple(),
    Text.translate("mek1000.multi.desc").aqua(),
  ]);
  event.add("mek1000:sml_drill_l", [
    Text.translate("mek1000.sml_drill.desc"),
    Text.translate("mek1000.sml_drill_l.desc").lightPurple(),
    Text.translate("mek1000.multi.desc").aqua(),
  ]);

  event.add("mek1000:singurarity_generator", [
    Text.translate("mek1000.singurarity_generator.desc"),
    Text.translate("mek1000.multi.desc").aqua(),
  ]);
  event.add("mek1000:combustion_gas_generator", [
    Text.translate("mek1000.combustion_gas_generator.desc"),
    Text.translate("mek1000.multi.desc").aqua(),
  ]);
  event.add("mek1000:fusion_controller", [
    Text.translate("mek1000.fusion_controller.desc"),
    Text.translate("mek1000.multi.desc").aqua(),
  ]);
  event.add("mek1000:infinity_fusion_controller", [
    Text.translate("mek1000.infinity_fusion_controller.desc"),
    Text.translate("mek1000.multi.desc").aqua(),
  ]);
  event.add("mek1000:large_digital_assembly_table", [
    Text.translate("mek1000.large_digital_assembly_table.desc"),
    Text.translate("mek1000.multi.desc").aqua(),
  ]);
  event.add("mek1000:rockbreak_simulator", [
    Text.translate("mek1000.rockbreak_simulator.desc"),
    Text.translate("mek1000.multi.desc").aqua(),
  ]);
  event.add("mek1000:library_of_babel", [
    Text.translate("mek1000.library_of_babel.desc"),
    Text.translate("mek1000.multi.desc").aqua(),
  ]);
  event.add("mek1000:dimensional_blast_furnace", [
    Text.translate("mek1000.dimensional_blast_furnace.desc"),
    Text.translate("mek1000.multi.desc").aqua(),
  ]);

  event.add("mek1000:etheric_computer_array", [
    Text.translate("mek1000.etheric_computer_array.desc"),
    Text.translate("mek1000.multi.desc").aqua(),
  ]);

  event.add("mek1000:advanced_gas_burning_generator", [
    Text.translate("mek1000.advanced_gas_burning_generator.desc"),
  ]);

  event.add("mek1000:skyblock_crafter", [
    Text.translate("mek1000.skyblock_crafter.desc"),
  ]);

  
  event.add("mek1000:the_null", [Text.translate("item.mek1000.the_null.desc")]);
});

ItemEvents.tooltip((event) => {
  let colorfulnames = [
    {
      id: "mek1000:infinity_ingot",
      name: "Infinity Ingot",
      nodes: [
        [255, 255, 0],
        [0, 255, 255],
        [255, 0, 255],
      ],
      length: 5,
      time: 1,
    },
  ];
  for (let i = 0; i < colorfulnames.length; i++) {
    let cname = colorfulnames[i];
    event.addAdvanced(cname.id, (item, advanced, text) => {
      let offset =
        Math.floor(Client.player.age / cname.time) %
        (cname.nodes.length * cname.length);
      let namearray = cname.name.split("");
      let coloredname = [];
      for (let j = 0; j < namearray.length; j++) {
        let pos = (j + offset) % (cname.nodes.length * cname.length);
        let newcolor = 0;
        for (let k = 0; k < 3; k++) {
          newcolor +=
            Math.pow(256, 2 - k) *
            (cname.nodes[Math.floor(pos / cname.length) % cname.nodes.length][
              k
            ] +
              Math.floor(
                ((cname.nodes[
                  (Math.floor(pos / cname.length) + 1) % cname.nodes.length
                ][k] -
                  cname.nodes[
                    Math.floor(pos / cname.length) % cname.nodes.length
                  ][k]) /
                  cname.length) *
                  (pos % cname.length)
              ));
        }
        coloredname.push(Text.of(namearray[j]).color(newcolor));
      }
      text.set(0, coloredname);
    });
  }
});
