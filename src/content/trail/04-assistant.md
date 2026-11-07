---
year: "2025–26"
slug: ai-assistant
title: "Teaching Headlamp to answer questions"
logos: [headlamp, microsoft]
---

I wrote Headlamp's AI assistant plugin. You ask it something about your cluster in plain English, and it turns that into Kubernetes API calls and streams the answer back into a chat panel. In September 2025 I made it able to [run MCP servers](https://github.com/headlamp-k8s/plugins/pull/385), so it could use outside tools as well as its own.

In March 2026 I worked with the folks behind [HolmesGPT](https://github.com/HolmesGPT/holmesgpt) to [bring their agent into the assistant](https://github.com/headlamp-k8s/plugins/pull/560). That integration became a demo in the KubeCon EU 2026 keynote. I didn't give the keynote. I built and prepped the demo that ran in it.

<span class="ask">What was it like watching it on the big screen? Anything that nearly broke the night before?</span>

The same assistant now ships inside [AKS desktop](https://github.com/Azure/aks-desktop/pull/419).

<p class="stat">LangChain · MCP · HolmesGPT · React</p>
