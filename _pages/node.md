---
layout: page
title: Node
#subtitle: Mark
permalink: /node/
hero_image: /marklab-website/assets/images/marklab_hero3.png
#hero_height: is-fullwidth
hero_darken: true
show_sidebar: false
menubar: menu
---

### Modular Measurement Platform for Mobile Networks

{% include image-modal.html link='/assets/images/mark_übersichtsbild_website.png' alt="Mark Node" %}

This image showcases our custom-built measurement platform, designed for evaluating mobile network performance across various technologies. The system is enclosed in a 3D-printed case and integrates multiple hardware components to enable precise and automated network experiments.

#### Key Components:
- Tinkerforge Modules:
    - GPS Bricklet – Provides accurate positioning and time synchronization using GPS, GLONASS, and Galileo.
    - Current/Voltage Bricklet – Monitors power consumption of connected devices.
    - Masterbrick – Manages module communication and data collection.

- Modems:
    - Teltonika TRM240 (Quectel EC21) – Supports 2G, 3G, and 4G (LTE Cat 1).
    - Teltonika TRM250 (Quectel BG96) – Enables 2G, LTE-M, and NB-IoT connectivity.
    - SIM PCB Adapter – Allows flexible SIM switching for network evaluation.

- Processing & Power Management:
    - Raspberry Pi 4 – Serves as the experiment controller, application host, and data storage unit.
    - MEGA4 PPPS Hub – Provides per-port power switching, enabling remote power cycling of the modems.

- Connectivity & Enclosure:
    - The platform connects via Ethernet for reliable data transfer.
    - Equipped with GPS and LTE antennas for optimal signal reception.
    - USB-C power input ensures stable power delivery.

This modular system is ideal for IoT network performance testing, QoS analysis, and mobile connectivity experiments. Its flexible architecture supports various configurations, making it a powerful tool for mobile network research.