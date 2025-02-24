---
layout: page
title: Measurements
#subtitle: Mark
permalink: /measurements/
hero_image: /marklab-website/assets/images/marklab_hero3.png
#hero_height: is-fullwidth
hero_darken: true
show_sidebar: false
menubar: menu
---

With the platform we are able to measure predefined measurements mostly for QoS measurements and energy consumption but due to our setup, Docker container with custom measurements configs can be uploaded. Currently, there are three types of measurements:
1. A **Measurement Task** is an active measurement to measure for example network performance after a connection to a mobile operator is established. Measurement tasks cannot run parallel and are always handled sequentially.
2. A **Background Task** is a measurement that runs in a background, parallel to a measurement task and starts before a connection to a mobile operator is established, and ends after the connection is closed, useful for example for energy measurements. Multiple background tasks can run in parallel.
3. An **Enhanced Background Task** is a combination of the measurement types above. It starts after a connection to a mobile operator is established, and multiple enhanced background tasks can run in parallel. It is useful for example for a tcpdump measurement.

The predefined measurements are currently the following:

<table class="table is-striped is-hoverable is-fullwidth">
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <!--<tr>
      <td>PDP emnify Context</td>
      <td>Background Task</td>
      <td>Handles PDP context for emnify connectivity</td>
    </tr>-->
    <tr>
      <td>Energy Current Voltage</td>
      <td>Background Task</td>
      <td>Measures energy and voltage levels of the selected device</td>
    </tr>
    <tr>
      <td>GPS Tracker</td>
      <td>Background Task</td>
      <td>Tracks the GPS position of the node</td>
    </tr>
    <tr>
      <td>System Information</td>
      <td>Background Task</td>
      <td>Collects system-related information and metrics</td>
    </tr>
    <tr>
      <td>Temperature CPU</td>
      <td>Background Task</td>
      <td>Monitors the CPU temperature of the Raspberry Pi</td>
    </tr>
    <tr>
      <td>tcpdump</td>
      <td>Enhanced Background Task</td>
      <td>Captures network packets for analysis</td>
    </tr>
    <tr>
      <td>AT Commander</td>
      <td>Measurement Task</td>
      <td>Sends AT commands to the modem</td>
    </tr>
    <tr>
      <td>fPing</td>
      <td>Measurement Task</td>
      <td>Measures network latency using fPing</td>
    </tr>
    <tr>
      <td>hPing</td>
      <td>Measurement Task</td>
      <td>Measures network latency using hPing</td>
    </tr>
    <tr>
      <td>Ping</td>
      <td>Measurement Task</td>
      <td>Measures ICMP ping delay</td>
    </tr>
    <tr>
      <td>Curl Download</td>
      <td>Measurement Task</td>
      <td>Downloads a file using Curl to measure network speed</td>
    </tr>
    <tr>
      <td>Network Report</td>
      <td>Measurement Task</td>
      <td>Generates a report of network conditions</td>
    </tr>
    <tr>
      <td>Traceroute Route</td>
      <td>Measurement Task</td>
      <td>Traces network route to a target destination</td>
    </tr>
    <tr>
      <td>Signal Quality</td>
      <td>Measurement Task</td>
      <td>Measures and reports network signal strength</td>
    </tr>
    <tr>
      <td>Curl Upload</td>
      <td>Measurement Task</td>
      <td>Uploads a file using Curl to test upload speed</td>
    </tr>
    <tr>
      <td>Get IP Address</td>
      <td>Measurement Task</td>
      <td>Retrieves and displays the device's public IP address</td>
    </tr>
  </tbody>
</table>


<!--<div class="columns is-multiline">
  {% for task in site.data.measurements %}
  <div class="column is-one-third">
    <div class="card">
      <div class="card-content">
        <p class="title">{{ task.label }}</p>
        <p class="subtitle">{{ task.name }}</p>
        <span class="tag is-info">{{ task.type }}</span>
      </div>
    </div>
  </div>
  {% endfor %}
</div>-->
