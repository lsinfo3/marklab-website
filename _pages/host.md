---
layout: page
title: Host a MARK node
section: Participate
description: We provide and manage the measurement node. You provide a location with mobile reception, power, and Internet access.
permalink: /host/
---
## What hosting involves

By hosting a MARK node, you help us measure cellular network performance, roaming, and energy consumption at your location.

We supply, configure, and manage the node remotely. You position it, connect the supplied antennas, and provide power and an Ethernet connection. Before we send a node, we will discuss which version to use, where to place it, shipping, and your institution’s requirements.

**Interested?** Email [{{ site.email }}](mailto:{{ site.email }}?subject=Hosting%20a%20MARKlab%20node) with your city, country, institution if applicable, and a short description of the available location and network connection. We can help you choose a node variant.

## What you need at the location

- **Mobile reception:** a suitable place for the node and its antennas with good cellular reception.
- **Power:** a continuous supply appropriate to the node variant. Use the supplied power adapter for the original MARK; the 5G guides specify an IEC power cable, which is not included.
- **Ethernet and Internet access:** an Ethernet connection providing an IP address via DHCP and outbound access for the management VPN. The node does not need a publicly reachable address or inbound port forwarding.
- **Local network approval:** permission to connect the node and a network configuration consistent with your organisation's policies. We can coordinate with your IT team.

Contact us to discuss power consumption, monthly data use, and how long you can host the node.

## Setup guides

Choose the guide matching the modem label on your node. The power connection and antenna arrangement differ between versions.

<div class="table-scroll" role="region" aria-label="Download node setup guides" tabindex="0">
<table>
<thead><tr><th scope="col">Node variant</th><th scope="col">Connections and power</th><th scope="col">Setup guide</th></tr></thead>
<tbody>
<tr><td>Original MARK<br>TRM240 + TRM250</td><td>Two mobile antennas, one GPS antenna, Ethernet, supplied power adapter</td><td><a href="{{ '/assets/manuals/mark-node-setup.pdf' | relative_url }}">Download PDF</a><br>9 December 2024</td></tr>
<tr><td>MARK 5G<br>RG520N-EB + BG96</td><td>Four RG520N-EB antennas, one BG96 antenna, one GPS antenna, Ethernet, IEC power cable</td><td><a href="{{ '/assets/manuals/mark-5g-rg520n-eb-setup.pdf' | relative_url }}">Download PDF</a><br>22 July 2026</td></tr>
<tr><td>MARK 5G<br>RM520N-GL + BG96</td><td>Four RM520N-GL antennas, one BG96 antenna, one GPS antenna, Ethernet, IEC power cable</td><td><a href="{{ '/assets/manuals/mark-5g-rm520n-gl-setup.pdf' | relative_url }}">Download PDF</a><br>25 November 2026</td></tr>
</tbody>
</table>
</div>

## Five steps to get connected

1. **Position the node** where there is good mobile reception.
2. **Connect the mobile antennas** to the matching labelled ports. Original MARK nodes have two mobile antennas; 5G nodes have five. Follow the guide for your variant.
3. **Connect the GPS antenna** to the port labelled GPS.
4. **Connect Ethernet** to a network with DHCP and outbound Internet access for the management VPN.
5. **Connect power** using the supply or cable specified in the matching guide.

Let us know when the node is connected so we can check it remotely. USB-A and HDMI connections on the 5G nodes are provided for debugging; hosts do not need to connect them.

## Network operation and security

The stationary nodes use Ethernet for management and their cellular modems for measurement traffic. Measurements run over the cellular connection. Remote management uses an encrypted VPN to the University of Würzburg, with access restricted to the authorised MARKlab team.

We provide the VPN server address, port, and connection details during host setup. If your organisation uses outbound firewall rules, contact us to agree on the required access with your IT team before connecting the node.

We recommend placing the node in a segregated VLAN or subnet, restricting access to other local devices, and reviewing firewall rules with your IT team. The setup guide for your node has more information.

## Questions from prospective hosts

<details><summary>Do I need to operate the experiments myself?</summary><p>The MARKlab team manages experiment scheduling and the node remotely. You provide the location, power, and network connection. Contact us if you need help with the node.</p></details>
<details><summary>Do I need a public IP address or inbound firewall rules?</summary><p>No. The stationary node initiates an outbound management VPN connection. It needs DHCP and the outbound access agreed with your IT team.</p></details>
<details><summary>Can I host in a country that already has a node?</summary><p>Please get in touch. Another location in the same country can give us access to different operators and radio conditions.</p></details>
<details><summary>Do I need to supply a SIM card?</summary><p>We arrange SIM provisioning and can assign SIMs remotely. Please contact us before buying or inserting a local SIM.</p></details>
<details><summary>Can I host a battery-powered or mobile node?</summary><p>The mobility node is still under development. The setup guides on this page describe stationary nodes with Ethernet management connectivity.</p></details>
<details><summary>What about electricity, traffic, shipping costs, or hosting duration?</summary><p>Please discuss these with us before we ship a node. Tell us where you could host it and any limits on cost or duration.</p></details>

## Contact the team

For hosting enquiries, setup support, or research collaboration, email [{{ site.email }}](mailto:{{ site.email }}).
