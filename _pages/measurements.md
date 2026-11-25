---
layout: page
title: Measurements and experiments
section: Platform
permalink: /measurements/
menubar: menu
---
## Containerised experiments

MARKlab combines predefined measurement tasks with custom Docker-based experiments. A job defines the cellular configuration, measurement target, and task sequence. The available hardware and local networks constrain which experiments can run at each location.

## Three task lifecycles

| Task category | When it runs | Typical purpose |
| --- | --- | --- |
| Measurement task (M) | After connection establishment; active tasks execute sequentially | Latency probes, transfers, and modem queries |
| Background task (B) | Before connection setup until after teardown; tasks may run in parallel | Current/voltage recording, GPS, and system telemetry |
| Enhanced background task (EB) | After connection establishment; alongside active tasks | Packet capture and continuous signal monitoring |

## Documented measurement tasks

The platform papers describe the following tasks. This is a research capability overview; the exact container set and compatibility for a new campaign should be confirmed with the team.

<div class="table-scroll" role="region" aria-label="Measurement task catalogue" tabindex="0">
<table>
<thead><tr><th scope="col">Task</th><th scope="col">Category</th><th scope="col">What it observes or does</th></tr></thead>
<tbody>{% for task in site.data.measurements %}
<tr><td>{{ task.label }}</td><td>{{ task.type }}</td><td>{{ task.description }}</td></tr>
{% endfor %}</tbody>
</table>
</div>

## Choose the method for the question

Different probing protocols can produce different absolute latency values, even when their trends are related. A measurement campaign should specify the probe method, packet timing, target, radio configuration, SIM, and routing conditions.

The 2026 **Measuring the Measurers** study evaluates measurement reliability and validity for RTT in a controlled LTE roaming setup. Its findings should not be treated as validation of every metric, radio technology, or deployment. [Explore the study and dataset]({{ '/results/#measurement-reliability-2026' | relative_url }}).

## Plan a campaign

Contact [{{ site.email }}](mailto:{{ site.email }}) with your research question, required locations and technologies, target endpoints, and intended measurements. Custom measurement containers need to follow the platform's execution interface.
