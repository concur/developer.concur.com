---
layout: post
title: Container Days in Boston
date: 2016-06-20
tags:
  - devops
  - docker
  - aws
  - kubernetes
author: Dale Ragan
---


ContainerDays in Boston
===
As an "open space conference” for DevOps community, [ContainerDays Boston](http://dynamicinfradays.org/events/2016-boston/) mixed presentational sessions with many participant-driven idea sharing, project demos, workshops into two days “unconference” schedule. At ContainerDays, [Dale](https://github.com/dragan), [Campbell](https://github.com/campbellgconcur), and [Weiteng](https://github.com/weitenghuang/) had chances to exchange our experience of container technology and how we built immutable infrastructure at Concur Technologies with other participants. Dale also had an amazing interview with Beth Parizeau from TechTarget, because we took the opportunity to get on the stage in one of the open space sessions. The article of interview is [(Tech firms roll out Kubernetes in production)](http://searchitoperations.techtarget.com/news/450297178/Tech-firms-roll-out-Kubernetes-in-production).  

Our Takeaway from ContainerDays:
---
+ Container technology is widespread (considerably mature) among large enterprises to startups. Different scales of projects have been running in container on production. The community is vibrant and public interest is going through the roof.  

+ More container management solutions (DEIS, Rancher, OpenShift, etc) surface to the market because of large demand of using container on production level.

+ Orchestrating containers in high-availability cluster is on its early stage with many new features and improvement coming out everyday from both industry and academia (like this session: [Understanding Cluster Schedulers, and Why You'll Want a Better One](https://docs.google.com/presentation/d/1LI7rlrij9CmPvkKe2NUbPPY90NnB-Lhqn3ga5b1XZd4/pub?start=false&loop=false) by Ionel Gog, University of Cambridge & Malte Schwarzkopf, MIT). It has been the most sought-after topic during this conference.  

+ Community sees the emerging pattern from many success stories using containers in design, build, testing, deployment, and operation of the Twelve-Factor App. The first talk of the conference, [From Hello World to Real World: Creating a Production-Grade Container Environment](https://www.slideshare.net/ShannonWilliams14/from-hello-world-to-real-world-container-days-boston-2016) by Bill Maxwell & Shannon Williams from Rancher Labs, gave newcomers what it took to bring your containerized jobs, apps or services to production with visibility, monitoring, and logging in place.  

+ Workshop and Open Space sessions are great opportunity to get newcomers' feet wet with container and cluster, while advanced users shared their thoughts of how we can make things even better.
A great tool that visualizes your Kubernetes environment which Ray demonstrated was the [Kubernetes Visualizer](https://github.com/saturnism/gcp-live-k8s-visualizer).
Here is a document that was used during the workshop: [Kubernetes Deep Dive: From Basics to Advanced Features](https://bit.ly/k8s-lab) by Ray Tsang from Google.  

Companies like Barkly, EMC, Joyent, Rancher Labs, Uber, Yelp presented their journeys into container technologies. Many of those validate what we build at Concur. Below are some of highlights. You can find more details from [ContainerDays' page](http://dynamicinfradays.org/events/2016-boston/) and [its Youtube channel](https://www.youtube.com/channel/UCajF7fDWt6cGPQKq5vWg_fg).

[Yelp's Journey Into Containers](https://docs.google.com/presentation/d/1zx5PRuA8WJTL7rL-wCWF-aL6OQnBINg3Oqv7L3FmODc/pub?start=false&loop=false&slide=id.p) by Chris Kuehl, Yelp

> Yelp is currently running one million containers per day. Yelp experiences some goods and bads with container. Their idea of "dumb-init" as container's PID 1 is actually very simple and smart way to solve an issue which could turns into system performance impact. They start a PaaS opensource project called [PaaSTA](https://github.com/yelp/paasta) to facilitate their services' building, deploying, scheduling and cluster orchestration.

[Introduction to Overlay Networks: The Good, The Bad and The Ugly](https://www.dropbox.com/s/5ub3ooxx4e4lt4q/Overlay%20Networks%20%E2%80%93%20Boston%20ContainerDays%202016.pdf?dl=0) by Andrey Sibiryov, Uber Technologies

> Andrey's talk went to great lengths for overlay network's topology. From their experience user-space overlay network seems to suffer more in performance comparing to kernel-based. The [Flannel](https://github.com/coreos/flannel) from CoreOs has default to be "UDP" backend (user-space), while it also offers "in-kernel VXLAN"; this will be something we should review, if we are not running Flannel on GCE or AWS-VPC backend.

[Kubernetes in Production, From the Ground Up](https://www.slideshare.net/mikesplain/container-days-boston-kubernetes-in-production) by Mike Splain, Barkly

> The talk echoed many aspects of our kubernetes cluster design at Concur. Mike's journey to bring their HA cluster to production with features of automatic scheduling, failover, rolling deployments, and autoscaling is truely fantastic. And there's the extra kudo for his nerve to demo on his production environment.

[ComplianceOps: Containers in Regulated Environments](http://dynamicinfradays.org/events/2016-boston/programme.html#compliance) by Elliot Murphy, Kindly Ops

> This talk presented the challenges of the use of DevOps and containers in a regulated environment. Whilst engineers look from a technical point of view, in the container world need to factor in how compliance policies are maintained. Namely, how to balance technical and administrative controls in this new containerized but regulated environment.
Great references and further reading links was discussed during the presentation, especially for folks wanting to understand the world of compliance. [speaker slides](https://speakerdeck.com/statik/complianceops-containers-in-regulated-environments).

What are we brewing at Concur
---

We are rebuilding our infrastructure and we've been thinking a lot about how our infrastructure will look like in the future. We're very excited to share a little teaser on what we've been working on here at Concur.

<img src="{{ site.baseurl }}/blog/images/aws-immutable-infrastructure.png" />

Stay tuned for a full blog post on how we accomplished the immutable infrastructure shown above in AWS!
