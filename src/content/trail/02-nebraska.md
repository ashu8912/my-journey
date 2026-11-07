---
year: "2020"
slug: nebraska
title: "Nebraska: who gets the update, and when"
logos: [kinvolk, flatcar]
---

[Flatcar Container Linux](https://www.flatcar.org/) is an OS for running containers, and it updates itself. That's harder than it sounds when you have thousands of machines. You don't want all of them rebooting into a new version on the same afternoon.

[Nebraska](https://github.com/flatcar/nebraska) is the piece that decides. Machines check in and ask "is there something new for me?" Nebraska looks at their group, their channel and the rollout rules, and says yes, not yet, or no. It's a Go service on PostgreSQL, and it runs in production at Akamai, Microsoft Azure and Google Cloud.

I applied to Kinvolk, the Berlin company behind Flatcar, went through the interviews, and joined as an intern in March 2020, while I was still in my final year of college. Nebraska was my first project. My first PR there went in on 4 March: a pagination fix in the activity list. That same month I swapped moment.js for the plain Date API, replaced jQuery with `fetch`, and added ESLint.

The internship ended in June. By then about 45 of my PRs had been merged, and in July 2020 I joined Kinvolk full-time.

Over the next year and a half I touched almost every part of it:

- Wrote the frontend tests, and ported the whole frontend to TypeScript.
- Built two new designs for the UI, and swapped Victory charts for Recharts.
- Moved the Go data layer off a legacy ORM onto goqu, and turned the instance list into a single join query with search.
- Smaller safety things too, like a limit on request body size for the update endpoints.

<p class="stat">82 merged PRs · Go, PostgreSQL, React, TypeScript</p>
