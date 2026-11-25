---
layout: page
title: The MARKlab platform
section: Research
description: Run experiments in public cellular networks using remotely managed nodes and containerised measurement tasks.
permalink: /platform/
menubar: menu
---
## About the platform

MARKlab is a distributed measurement platform developed at the Chair of Communication Networks, University of Würzburg. Dedicated nodes, called **MARKs**, execute experiments in public mobile networks and return measurement data to a central backend.

MARK stands for **Multi-RAT Autonomous MeasuRement FrameworK**. Nodes use comparable hardware and Docker-based measurement tasks. Experiments are scheduled centrally, and SIMs can be assigned remotely.

## What you can investigate

- **Quality of service:** latency, packet loss, throughput, signal conditions, and the differences between operators and locations.
- **Energy consumption:** current and voltage recordings to measure the energy used by IoT devices during communication.
- **Roaming:** the relationship between a visited network, home-network routing, and end-to-end performance.
- **Application behaviour:** containerised experiments against controlled application endpoints or other Internet targets.
- **Measurement methodology:** whether measurement tools give consistent results and measure the intended network property.

## Available hardware

The original MARK combines Teltonika TRM240 and TRM250 modems for IoT-focused cellular measurements. Two additional **5G variants, based on RG520N-EB and RM520N-GL modems, are operational**. Actual radio technology availability depends on the deployed node, modem variant, operator, and local network.

The **mobility node remains under development**. It uses a separate cellular management connection and battery power for measurements on the move.

[Compare node variants]({{ '/node/' | relative_url }}).

## How experiments run

1. A job defines the node, cellular configuration, measurement target, and tasks.
2. The node establishes the requested cellular connection.
3. Active measurement tasks execute sequentially; supporting background tasks collect telemetry in parallel according to their lifecycle.
4. Results are returned to the backend for analysis.

[Explore measurement tasks]({{ '/measurements/' | relative_url }}) or [read about the architecture]({{ '/architecture/' | relative_url }}).

## Publications and source code

[Publications and datasets]({{ '/results/' | relative_url }}) describe our studies and provide the data collected in them. The [open-source platform repository](https://github.com/lsinfo3/marklab) contains software and construction resources.

To discuss experiments or a research collaboration, contact [{{ site.email }}](mailto:{{ site.email }}). We arrange access and experiment schedules with you.

## Host a node

Hosting a node lets us run measurements at your location. [Read the hosting requirements and download the setup guides]({{ '/host/' | relative_url }}).
