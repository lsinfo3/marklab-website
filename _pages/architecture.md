---
layout: page
title: System architecture
section: Platform
permalink: /architecture/
menubar: menu
---
## Management and measurement traffic

Stationary MARK nodes use **Ethernet for management** and **cellular interfaces for measurement traffic**. This separates experiment traffic from the host institution's local network. The mobility node, currently under development, uses a separate modem for management.

{% include image-modal.html link='/assets/images/marklab_architekturbild_lang.png' alt="Original MARKlab architecture: measurement nodes, visited and home mobile networks, and the central research backend" %}

The diagram shows the original stationary node and the traffic path for home-routed roaming.

## The measurement node

A MARK runs measurement containers, configures cellular connectivity, collects telemetry, and transfers results. The [hardware variants]({{ '/node/' | relative_url }}) include the original IoT-focused node and two operational 5G configurations.

## The central backend

- **Management server:** experiment configuration, scheduling, an automation API, user interface, and result storage.
- **VPN server:** encrypted management connectivity between deployed nodes and the backend.
- **SIM provisioning service:** SIM cards hosted centrally can be assigned to remote nodes through SIM tunnelling, avoiding a physical SIM change at each deployment.
- **Application server:** controlled endpoints for protocols such as MQTT, CoAP, AMQP, XMPP, and HTTP, with optional server-side observations. Experiments may also use other reachable Internet targets.

The SIM provisioning service in the research platform is distinct from the mobile operator's home network and core infrastructure.

## A roaming measurement path

In a home-routed roaming configuration, a node connects to the radio access network of a visited operator. Traffic passes through the inter-operator IP exchange and the home network's gateway before reaching its Internet target. This path can influence the measured latency and throughput.

MARKlab supports both roaming and local SIMs. The [published studies]({{ '/results/' | relative_url }}) describe the SIMs, routing, targets, and radio technologies used in each experiment.

## Repeatable execution

Active measurement tasks run one after another to avoid interference. Background tasks record data during connection setup, measurement, or teardown, depending on the task. [See the measurement model]({{ '/measurements/' | relative_url }}).

## Information for hosts

For power, Ethernet, outbound VPN access, and the recommended local-network isolation, see [Host a node]({{ '/host/' | relative_url }}).
