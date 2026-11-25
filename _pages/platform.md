---
layout: page
title: The MARKlab platform
section: Research
description: Remotely orchestrated experiments in public cellular networks, built around dedicated hardware and containerised measurements.
permalink: /platform/
menubar: menu
---
## From a research question to a real network

MARKlab is a distributed measurement platform developed at the Chair of Communication Networks, University of Würzburg. Dedicated nodes, called **MARKs**, execute experiments in public mobile networks and return measurement data to a central backend.

MARK stands for **Multi-RAT Autonomous MeasuRement FrameworK**. The platform combines comparable hardware, remote SIM provisioning, central orchestration, and Docker-based measurement tasks to support repeatable research outside the laboratory.

## What you can investigate

- **Quality of service:** latency, packet loss, throughput, signal conditions, and the differences between operators and locations.
- **Energy consumption:** current and voltage observations alongside network measurements, supporting analysis of IoT connectivity costs.
- **Roaming:** the relationship between a visited network, home-network routing, and end-to-end performance.
- **Application behaviour:** containerised experiments against controlled application endpoints or other Internet targets.
- **Measurement methodology:** reliability and validity of measurement tools under explicitly stated experimental conditions.

## Available hardware

The original MARK combines Teltonika TRM240 and TRM250 modems for IoT-focused cellular measurements. Two additional **5G variants, based on RG520N-EB and RM520N-GL modems, are operational**. Actual radio technology availability depends on the deployed node, modem variant, operator, and local network.

The **mobility node remains under development**. It explores cellular management connectivity and battery-backed operation for experiments on the move. It is separate from the stationary hosting configurations.

[Compare node variants]({{ '/node/' | relative_url }}).

## How experiments run

1. A job defines the node, cellular configuration, measurement target, and tasks.
2. The node establishes the requested cellular connection.
3. Active measurement tasks execute sequentially; supporting background tasks collect telemetry in parallel according to their lifecycle.
4. Results are returned to the backend for analysis.

[Explore measurement tasks]({{ '/measurements/' | relative_url }}) or [read about the architecture]({{ '/architecture/' | relative_url }}).

## Start with the research

[Publications and datasets]({{ '/results/' | relative_url }}) document published studies and their experimental scope. The [open-source platform repository](https://github.com/lsinfo3/marklab) contains software and construction resources.

To discuss experiments or a research collaboration, contact [{{ site.email }}](mailto:{{ site.email }}). Access and scheduling are coordinated with the team.

## Contribute a location

Hosting a node gives MARKlab another perspective on real cellular networks. [Read the hosting requirements and download the setup guides]({{ '/host/' | relative_url }}).
