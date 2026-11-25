---
layout: page
title: Host a MARK node
section: Participate
description: Help researchers understand real mobile networks. We provide the measurement node and manage experiments remotely; you provide a suitable location, power, and Internet access.
permalink: /host/
---
## What hosting involves

MARKlab depends on collaborators who give measurement nodes a home. A deployment lets researchers investigate cellular network performance, roaming, and energy consumption from another real-world location.

We provide the node and coordinate its configuration and remote operation. You position it, connect the supplied antennas, and provide power and an Ethernet connection. Contact us before arranging a deployment so we can agree on the hardware variant, local suitability, shipping, and any institutional requirements.

**Interested?** Email [{{ site.email }}](mailto:{{ site.email }}?subject=Hosting%20a%20MARKlab%20node) with your city, country, institution if applicable, and a short description of the available location and network connection. You do not need to know which node variant you need.

## What you need at the location

- **Mobile reception:** a suitable place for the node and its antennas with good cellular reception.
- **Power:** a continuous supply appropriate to the node variant. Use the supplied power adapter for the original MARK; the 5G guides specify an IEC power cable, which is not included.
- **Ethernet and Internet access:** an Ethernet connection providing an IP address via DHCP and outbound access for the management VPN. The node does not need a publicly reachable address or inbound port forwarding.
- **Local network approval:** permission to connect the node and a network configuration consistent with your organisation's policies. We can coordinate with your IT team.

The guides do not specify a guaranteed monthly data volume, power budget, or required hosting duration. Please contact us to agree on these details for your deployment.

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

Let us know once the node is connected so that we can coordinate the deployment with you. USB-A and HDMI connections on the 5G nodes are provided for debugging; hosts do not need to connect them.

## Network operation and security

The stationary nodes use Ethernet for management and their cellular modems for measurement traffic. Experiments measure the mobile network; they are not intended to test your local network. Remote management uses an encrypted VPN to the University of Würzburg, with access restricted to the authorised MARKlab team.

We provide the VPN server address, port, and connection details during host setup. If your organisation uses outbound firewall rules, contact us to agree on the required access with your IT team before connecting the node.

We recommend placing the node in a segregated VLAN or subnet, restricting access to other local devices, and reviewing firewall rules with your IT team. See the matching PDF for the supplied security guidance.

## Questions from prospective hosts

<details><summary>Do I need to operate the experiments myself?</summary><p>The MARKlab team manages experiment scheduling and the node remotely. Your role is to provide the location and connections. Contact us if the node needs local attention.</p></details>
<details><summary>Do I need a public IP address or inbound firewall rules?</summary><p>No. The stationary node initiates an outbound management VPN connection. It needs DHCP and the outbound access agreed with your IT team.</p></details>
<details><summary>Can I host in a country that already has a node?</summary><p>Please get in touch. Additional locations can offer different operators, radio conditions, and opportunities to compare deployments.</p></details>
<details><summary>Do I need to supply a SIM card?</summary><p>SIM provisioning is coordinated by the MARKlab team. The platform supports remote SIM provisioning, so contact us before purchasing or inserting a local SIM.</p></details>
<details><summary>Can I host a battery-powered or mobile node?</summary><p>The mobility node is still under development. The setup guides on this page describe stationary nodes with Ethernet management connectivity.</p></details>
<details><summary>What about electricity, traffic, shipping costs, or hosting duration?</summary><p>These depend on the deployment and should be agreed with the MARKlab team before shipping. Contact us with your location and constraints.</p></details>

## Contact the team

For hosting enquiries, setup support, or research collaboration, email [{{ site.email }}](mailto:{{ site.email }}).
