---
title: Program
permalink: /program/
---

<style>
.content-container {
    display: flex;
    flex-direction: column;
}

.content-block {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.content-block .text {
    flex: 1;
    padding: 0 20px;
    text-align: justify;
}

.content-block img {
    width: 150px;
    height: auto;
    border-radius: 10px;
}

.content-block .left {
    order: 0;
}

.content-block .right {
    order: 1;
}
</style>


# WueWoWAS'24 Program

The program will include regular presentation sessions with ample time for questions and discussion. Each individual presentation will span a maximum of 15 minutes. For the first time this year, we are organizing a speedmentoring session with invited experts from academia and industry. Participants will have the opportunity to book slots with each of the invited experts to discuss their own work, recent developments, or other professional matters. The workshop will start on Monday morning and finish Tuesday afternoon. 

## Overall Program

<figure>
	<a href="{{ '/assets/images/Overall_Program_WueWOWAS2024.png' | relative_url }}" class="image-popup">
    <img src="{{ '/assets/images/Overall_Program_WueWOWAS2024.png' | relative_url }}"  width="75" height="75">
  </a>
	  <figcaption>
      Program for the WueWoWAS Workshop: Technical Sessions, Speed Mentoring, and VDE ITG KT2 Session.
    </figcaption>
</figure>

## Invited Speakers
<div class="content-container">      
	<div style="width:100%; background-color: #FEFEFE; color: #252A34; font-weight: bold; margin-bottom: 10px; padding-left: 170px;">Andra Elena Lutu (Telefonica Research)</div>
        <div class="content-block">
            <img src="{{ '/assets/images/andra_lutu.jpg' | relative_url }}" alt="Andra Elena Lutu" class="image left">
            <div class="text">
                <p>Andra is a network architecture expert specializing in next-generation network design, mobile networks, IoT, and traffic engineering. Since July 2021, she has been a Senior Researcher at Telefónica Research in Madrid, Spain. Previously, she held research positions at Telefónica Research in Barcelona and Simula Research Laboratory in Oslo. She earned her Ph.D. in Telematics Engineering from IMDEA Networks Institute and University Carlos III of Madrid in 2014. Her work focuses on improving mobile network performance and user experience. Andra’s work translated into impactful industrial innovation projects, and was published in top venues, including ACM MobiCom, ACM SIGCOMM or IEEE INFOCOM.</p>
            </div>
        </div>
	<div style="width:100%; background-color: #FEFEFE; color: #252A34; font-weight: bold; margin-bottom: 10px; padding-left: 170px;">Christian Henke (Emnify)</div>
	<div class="content-block">
		<img src="{{ '/assets/images/christian_henke.jpg' | relative_url }}" alt="Christian Henke" class="image left">
		<div class="text">
			<p>Christian leads emnify's product strategy, shaping it’s cloud-native mobile core network and connectivity management platform. Focused on enhancing customer experience, he ensures seamless connectivity integration for Enterprises. Christian's expertise empowers businesses to navigate IoT and cellular connectivity with ease.</p>
		</div>
	</div>
	
	<div style="width:100%; background-color: #FEFEFE; color: #252A34; font-weight: bold; margin-bottom: 10px; padding-left: 170px;">Maciej Muehleisen (Ericsson)</div>
	<div class="content-block">
		<img src="{{ '/assets/images/maciej_muehleisen.jpg' | relative_url }}" alt="Maciej Muehleisen" class="image left">
		<div class="text">
			<p>Maciej received his Ph.D. on “Voice over LTE” from RWTH Aachen University in 2015. He worked as a group leader for vehicular communication at Hamburg University of Technology (TUHH) from 2012 until 2016, focusing on highly reliable aircraft and maritime networks, before joining Ericsson Research in 2017. Maciej’s key research interest is in end-to-end design, evaluation and approval of mission- and/or safety-critical communication services. He has been leading Ericsson’s Radio Network Concept for Verticals research group since May 2023. The group is conducting research, often together with ecosystem partners, in domains like manufacturing, connected road vehicles, railways, immersive interactions and Integrated Communication & Sensing (ICAS).</p>
		</div>
	</div>
</div>

## List of Accepted Papers
Session 1: P4 and Hardware [Chair: Maciej Muehleisen]
- Honey for the Ice Bear - Dynamic eBPF in P4 (**Manuel Simon**; Henning Stubbe; Sebastian Gallenmüller; Georg Carle)
- UniCorn-P4: A Universal Control Plane and GUI for P4 (**Fabian Ihle**; Moritz Flüchter; Steffen Lindner; Michael Menth)
- P4-MTAGG - a Framework for Multi-Tenant P4 Network Devices (**Fabian Brisch**; Andreas J. Kassler; Sándor Laki; Péter Hudoba; Gergely Pongrácz)
- Utilizing Hybrid P4 Solutions to Enhance 5G gNB with Data Plane Programmability (**Mohsen Memarian**; Andreas J. Kassler; Karl-Johan Grinnemo; Sándor Laki; Gergely Pongrácz; Johan Forsman)
- Low-Cost Energy Measurement and Multi-Port Traffic Generation for Network Devices (**Noah Mehling**; Frank Loh; Tobias Hoßfeld)

Session 2: Modeling [Chair: Christian Henke]
- Synchronization of Network Digital Twins (**Sai Anirudh Madhavapeddi**; Marton Kajo; Wolfgang Kellerer)
- Towards Data-Driven Approaches for Network Digital Twins of Microservice-Based Architectures (**Razvan-Mihai Ursu**; Navidreza Asadi; Leon Wong; Wolfgang Kellerer)
- LRU-BottomUp: A Caching Strategy with Hit Ratio Performance like LRU and Overhead like FIFO (**Gerhard Hasslinger**; Konstantinos Ntougias; Frank Hasslinger; Oliver Hohlfeld)

Session 3: Security/Reliability [Chair: Stanislav Lange]
- Thermal Effects on Timestamping in 100G Networking Devices (**Stefan Lachnit**; Sebastian Gallenmüller; Georg Carle)
- 5G Security Landscape: Investigating Attack Vectors in 5G and Beyond Networks (**Mehrdad Hajizadeh**; Trung V. Phan; Beny Nugraha; Abhishek Venkatesh Jnanashree; Tim Niehoff; Oliver Krause; Martin Mieth; Thomas Bauschert)
- Real-Time Monitoring of Software-Defined Networks in Kathará for Denial-Of-Service Attacks (**Marcel Großmann**; Noelle Weinmann)

Session 4: 5G Networks [Chair: Andra Lutu]
- A Framework for 5G and Beyond, Non-Terrestrial Networks, and V2X (**Luigi Martino**; Jörg Deutschmann; Kai-Steffen J. Hielscher; Reinhard German)
- Towards Modeling the Impact of 5G New Radio on Dataplane Traffic Characteristics (**Simon Raffeck**; Stefan Geissler; Tobias Hoßfeld)
- Energy Consumption in Converged Networks: A Study of LTE-M and Non-Terrestrial NB-IoT (**Viktoria Vomhoff**; Fabian Poignée; Frank Loh; Stefan Geissler; Tobias Hoßfeld)
- Towards a Generalizable Fine-Granular 5G Resource-Bound Model (**Simon Raffeck**; Phillip Raffeck)
- Adaptive Traffic Steering for Cellular Networks: Leveraging Predictive QoS Metrics for Application-Specific Optimization (**Nehal Baganal-Krishna**; Amr Rizk)

Session 5: Wireless TSN [Chair: Prof. Andreas Kassler]
- P5G-TSN: A Private 5G TSN Simulation Framework (**Laura Becker**; Wolfgang Kellerer)
- Research Demand and Review on Deterministic Communication in Hybrid 5G Networks Based on TSN (**Mahmoud Alqudah**; Roman Obermaisser; Kai Daniel)
- Time-Sensitive Networking over the Air: Combining 5G and TSN (**Alexej Grigorjew**; Simon Raffeck; Stefan Geissler; Tobias Hoßfeld)
- TSN Scheduling Robust to Wireless Performance Uncertainties: A Problem and Model Definition (**Özgür Ozan Kaynak**; Andreas J. Kassler; Andreas Fischer; Ognjen Dobrijevic; Hamza Chahed)




