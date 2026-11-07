---
year: "2020–26"
slug: headlamp
title: "Headlamp: a Kubernetes UI that other people can extend"
logos: [headlamp, kinvolk, microsoft]
---

[Headlamp](https://github.com/kubernetes-sigs/headlamp) also started at Kinvolk. It's a web UI for Kubernetes, built so that other teams can add to it with plugins instead of forking it.

My first Headlamp PR, in July 2020, was "Create desktop app". It wrapped Headlamp in Electron so the same code runs on Linux, macOS and Windows. Two months later I added [OIDC login](https://github.com/kubernetes-sigs/headlamp/pull/56), so companies could sign in with their own identity provider (Dex, Keycloak, Azure AD). Many of them couldn't use it before that.

In 2021 Microsoft acquired Kinvolk, so Headlamp and I both moved to Microsoft. I kept working on Headlamp there for the next five years. It's now a Kubernetes SIG UI project. In March 2026 I was [added to the maintainers list](https://github.com/kubernetes-sigs/headlamp/pull/4925).

Some of the things I built along the way:

- The plugin system, and later plugins of my own: the Helm app catalog, and Flux.
- Port forwarding, a notification area, dark theme, node drain and cordon, a settings page.
- The desktop app's update and release notes flow.
- Making big clusters fast: virtualised lists and code splitting cut render time by about 60%.

I also mentored six people through LFX and Google Summer of Code. Every one of them shipped a plugin that people use, for Volcano, Cluster API, Kubeflow and Knative.

<span class="ask">One Headlamp moment you still remember: a bug that took a weekend, a review that taught you something, a release day.</span>

<p class="stat">130 merged PRs in Headlamp · 27 in the plugins repo</p>
