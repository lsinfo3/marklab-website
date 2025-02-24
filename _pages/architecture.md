---
layout: page
title: Architecture
#subtitle: Mark
permalink: /architecture/
hero_image: /marklab-website/assets/images/marklab_hero3.png
#hero_height: is-fullwidth
hero_darken: true
show_sidebar: false
menubar: menu
---


### **System Architecture for Marklab**

{% include image-modal.html link='/assets/images/marklab_architekturbild_lang.png' alt="Marklab Architecture" %}

This diagram illustrates the architecture of **Marklab**, designed to evaluate mobile network performance across different network components.

#### **System Components:**

- **MARK (Measurement Node):**  
  - Equipped with **Teltonika TRM240 & TRM250** modems.  
  - Connects to the network via **Ethernet** for management purposes and cellular connectivity for measurements.  

- **Visited Network (Foreign Mobile Network):**  
  - The modems attach to the **Radio Access Network (RAN)**.  
  - Traffic is routed through the **Serving Gateway (SGW)**.  

- **Home Network (Core Network of the SIM Provider):**  
  - Data is forwarded through the **IPX** (Interconnect Packet Exchange).  
  - Reaches the **Packet Gateway (PGW)**, which interfaces with external networks.  

- **University of Würzburg (Measurement & Control Backend):**  
  - **Application Server:** Handles experiment execution and data collection.  
  - **VPN Server:** Secures remote access to the measurement node.  
  - **Management Server:** Coordinates measurement tasks and device configurations.  
  - **SIM Provider:** Hosts multiple SIM profiles for flexible network testing.  

#### **Data Flow & Network Interaction:**
1. The **MARK** node connects to a visited network via **TRM240 (LTE Cat 1) or TRM250 (NB-IoT, LTE-M, 2G)**.  
2. Traffic is processed by the **SGW** and forwarded via the **IPX backbone** to the home network.  
3. The **PGW** handles data transfer between mobile networks and external systems.  
4. Measurement results are collected and analyzed at the **University of Würzburg backend**.  

This modular system enables comprehensive **QoS analysis, latency measurements, throughput testing, and SIM-based network evaluations**.