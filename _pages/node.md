---
layout: page
title: MARK node variants
section: Hardware
description: Hardware and setup guides for the original MARK node, the two operational 5G variants, and the mobility node under development.
permalink: /node/
menubar: menu
---
## Hardware for controlled measurements

A MARK node contains cellular modems, an experiment controller, and sensors in a custom enclosure. It runs experiments locally and receives jobs from the MARKlab backend.

<div class="table-scroll" role="region" aria-label="MARK node variants" tabindex="0">
<table>
<thead><tr><th scope="col">Variant</th><th scope="col">Modem configuration</th><th scope="col">Status</th><th scope="col">Setup</th></tr></thead>
<tbody>
<tr><td>Original MARK</td><td>Teltonika TRM240 + TRM250<br>IoT-focused cellular measurements</td><td><span class="status active">Operational</span></td><td><a href="{{ '/assets/manuals/mark-node-setup.pdf' | relative_url }}">Setup PDF</a></td></tr>
<tr><td>MARK 5G · RG520N-EB</td><td>RG520N-EB + BG96<br>5G and IoT measurement hardware</td><td><span class="status active">Operational</span></td><td><a href="{{ '/assets/manuals/mark-5g-rg520n-eb-setup.pdf' | relative_url }}">Setup PDF</a></td></tr>
<tr><td>MARK 5G · RM520N-GL</td><td>RM520N-GL + BG96<br>5G and IoT measurement hardware</td><td><span class="status active">Operational</span></td><td><a href="{{ '/assets/manuals/mark-5g-rm520n-gl-setup.pdf' | relative_url }}">Setup PDF</a></td></tr>
<tr><td>Mobility MARK</td><td>Prototype with a separate management modem and battery power</td><td><span class="status planned">In development</span></td><td>Contact the team</td></tr>
</tbody>
</table>
</div>

Last updated 25 November 2026. The modem, SIM, roaming agreements, and local networks determine which technologies are available at a location; [contact the team]({{ '/contact/' | relative_url }}) to discuss a particular experiment.

## Inside the original MARK

{% include image-modal.html link='/assets/images/mark_übersichtsbild_website.png' alt="Annotated interior of the original MARK node showing the controller, modems, power hub, and measurement modules" %}

The original node includes:

- **Raspberry Pi 4:** experiment control, container execution, and local result handling.
- **Teltonika TRM240 and TRM250 modems:** cellular connectivity for measurements across the supported radio technologies.
- **Tinkerforge current/voltage modules:** record modem and system power consumption.
- **GPS receiver:** records the node’s location.
- **Programmable USB power control:** selective activation and remote modem power cycling.
- **Ethernet management connection:** remote control and result transfer, separate from cellular measurement traffic.

This diagram describes the original hardware configuration. The 5G variants have different modem, antenna, enclosure, and power arrangements; use their matching manuals.

## The two 5G variants

Both the **RG520N-EB** and **RM520N-GL** node versions are operational. Their setup guides specify four antennas for the 5G modem, one BG96 antenna, one GPS antenna, an Ethernet management connection, and an IEC power connection. Use the setup guide for your 5G variant when connecting power.

## Mobility extension: under development

We are developing a mobility node that can run without Ethernet or mains power. The design adds a dedicated cellular modem for management, battery-backed operation, and local status information. Research on this extension examines how movement and handovers affect connectivity and energy consumption.

The mobility node is still under development. You can read about the measurements in our [research publications]({{ '/results/' | relative_url }}).

## Hosting and construction resources

[Read the hosting requirements and setup instructions]({{ '/host/' | relative_url }}). Software and hardware construction resources are available in the [MARKlab repository](https://github.com/lsinfo3/marklab).
