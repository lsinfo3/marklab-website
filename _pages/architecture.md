---
layout: page
title: System architecture
section: Platform
permalink: /architecture/
menubar: menu
---
## Two connections, different roles

Stationary MARK nodes use **Ethernet for management** and **cellular interfaces for measurement traffic**. This separates experiment traffic from the host institution's local network. The mobility extension is exploring a separate cellular management connection and remains under development.

{% include image-modal.html link='/assets/images/marklab_architekturbild_lang.png' alt="Original MARKlab architecture: measurement nodes, visited and home mobile networks, and the central research backend" %}

The diagram illustrates the original stationary-node configuration and a home-routed roaming path. It is not a complete 5G core-network diagram or a representation of every supported connectivity scenario.

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

Roaming is an experimental configuration, not a requirement of the platform. The [published studies]({{ '/results/' | relative_url }}) describe their SIMs, routing, targets, and radio technologies so that results can be interpreted within that scope.

## Repeatable execution

Containerised tasks follow a defined job lifecycle. Active measurements run sequentially to avoid interference; background tasks observe the relevant phases of a connection. [See the measurement model]({{ '/measurements/' | relative_url }}).

## Information for hosts

For power, Ethernet, outbound VPN access, and the recommended local-network isolation, see [Host a node]({{ '/host/' | relative_url }}).
