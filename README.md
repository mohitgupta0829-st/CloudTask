# ☁️ CloudTask

<div align="center">

### Cloud-Native Full Stack Task Management Platform

A production-oriented project demonstrating modern DevOps practices using **React, Node.js, PostgreSQL, Docker, Kubernetes, Amazon EKS, Terraform, GitHub Actions, Helm, Prometheus, and Grafana.**

<br>

![License](https://img.shields.io/badge/License-MIT-green.svg)
![React](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-336791?logo=postgresql)
![Docker](https://img.shields.io/badge/Container-Docker-2496ED?logo=docker)
![Kubernetes](https://img.shields.io/badge/Orchestration-Kubernetes-326CE5?logo=kubernetes)
![AWS](https://img.shields.io/badge/Cloud-AWS_EKS-FF9900?logo=amazonaws)
![Terraform](https://img.shields.io/badge/IaC-Terraform-7B42BC?logo=terraform)
![GitHub Actions](https://img.shields.io/badge/CI/CD-GitHub_Actions-2088FF?logo=githubactions)
![Helm](https://img.shields.io/badge/Package-Helm-0F1689?logo=helm)
![Prometheus](https://img.shields.io/badge/Monitoring-Prometheus-E6522C?logo=prometheus)
![Grafana](https://img.shields.io/badge/Dashboard-Grafana-F46800?logo=grafana)

</div>

---

# 📑 Table of Contents

- Overview
- Why CloudTask?
- Project Highlights
- Technology Stack
- System Architecture
- Repository Structure
- CI/CD Pipeline
- Infrastructure
- Kubernetes Deployment
- Helm
- Monitoring
- Screenshots
- Local Setup
- Deployment
- Future Improvements
- Author

---

# 📖 Overview

CloudTask is a cloud-native full stack task management application built to demonstrate an end-to-end DevOps workflow.

Unlike traditional portfolio projects that stop after application development, CloudTask focuses on the complete software delivery lifecycle—from writing application code to deploying production-ready workloads on Kubernetes.

The project combines modern application development with infrastructure automation, continuous integration, container orchestration, cloud deployment, and monitoring.

The Kubernetes cluster used for deployment is provisioned separately using **Terraform**, while this repository focuses on application delivery and operational workflows.

---

# 🎯 Why CloudTask?

Modern software engineering extends far beyond writing application code.

CloudTask was created to showcase practical experience with technologies commonly used in production DevOps environments.

This project demonstrates:

- Building a full-stack web application
- Containerizing services with Docker
- Local development using Docker Compose
- Automated CI/CD using GitHub Actions
- Publishing images to Docker Hub
- Deploying workloads on Kubernetes
- Running applications on Amazon EKS
- Infrastructure provisioning with Terraform
- Packaging deployments using Helm
- Monitoring workloads using Prometheus & Grafana

The objective is not only to deploy an application but also to demonstrate how modern cloud-native applications are delivered, managed, and operated.

---

# 🚀 Project Highlights

✔ Full Stack Architecture

✔ JWT Authentication

✔ REST API

✔ PostgreSQL Database

✔ Dockerized Services

✔ Multi-stage Docker Builds

✔ Docker Compose

✔ GitHub Actions CI/CD

✔ Docker Hub Integration

✔ Kubernetes Deployments

✔ Amazon EKS

✔ Infrastructure as Code

✔ Helm Charts

✔ Prometheus Monitoring

✔ Grafana Dashboards

✔ Production Deployment Practices

---

# 🛠 Technology Stack

| Category | Technologies |
|-----------|--------------|
| Frontend | React, Vite |
| Backend | Node.js, Express.js |
| Database | PostgreSQL |
| Authentication | JWT |
| API | REST |
| Containerization | Docker, Docker Compose |
| Registry | Docker Hub |
| CI/CD | GitHub Actions |
| Orchestration | Kubernetes |
| Cloud | Amazon EKS |
| Infrastructure | Terraform |
| Packaging | Helm |
| Monitoring | Prometheus, Grafana |
| Reverse Proxy | NGINX |
| Version Control | Git & GitHub |

---

# 📊 Project Metrics

| Resource | Count |
|----------|------:|
| Docker Images | 3 |
| Docker Compose Services | 3 |
| Kubernetes Deployments | 3 |
| Kubernetes Services | 3 |
| Namespace | 1 |
| ConfigMap | 1 |
| Secret | 1 |
| Persistent Volume | 1 |
| Persistent Volume Claim | 1 |
| Ingress | 1 |
| GitHub Actions Workflow | 1 |
| Helm Chart | 1 |
| Monitoring Stack | 2 |

---
---

# 📂 Repository Structure

The repository follows a modular structure, separating application source code from infrastructure, deployment manifests, monitoring, and documentation.

```text
CloudTask
│
├── apps/                          # Application source code
│   ├── frontend/                  # React + Vite frontend
│   ├── backend/                   # Express REST API
│   └── database/                  # PostgreSQL initialization
│
├── infrastructure/                # Deployment resources
│   ├── docker/                    # Docker & Docker Compose
│   ├── kubernetes/                # Kubernetes manifests
│   ├── terraform/                 # Infrastructure as Code
│   └── helm/                      # Helm Chart
│
├── monitoring/                    # Prometheus & Grafana
│
├── docs/                          # Architecture & screenshots
│
└── README.md
```

---

# 🏛 System Architecture

The following diagram represents the complete software delivery lifecycle from development to production deployment.

```text
                     Developer

                         │

                         ▼

                 GitHub Repository

                         │

                         ▼

                GitHub Actions CI/CD

                         │

             Build • Test • Publish

                         │

                         ▼

                    Docker Hub

                         │

                         ▼

                Kubernetes Manifests

                         │

                         ▼

                Amazon EKS Cluster

          ┌────────────┴────────────┐

          ▼                         ▼

   React Frontend            Express Backend

                                     │

                                     ▼

                               PostgreSQL

                                     │

                                     ▼

                             Persistent Volume
```

---

# ☸ Kubernetes Architecture

CloudTask is deployed using Kubernetes following a microservice-oriented architecture.

```text
                    cloudtask Namespace

                             │

        ┌────────────────────┼─────────────────────┐

        ▼                    ▼                     ▼

 Frontend Deployment   Backend Deployment   PostgreSQL Deployment

        │                    │                     │

        ▼                    ▼                     ▼

 Frontend Service      Backend Service      PostgreSQL Service

                             │

                             ▼

                       ConfigMap

                             │

                             ▼

                          Secret

                             │

                             ▼

                     Persistent Volume

                             │

                             ▼

                  Persistent Volume Claim

                             │

                             ▼

                          Ingress
```

---

# 🐳 Application Architecture

CloudTask consists of three core services.

```text
                User

                  │

                  ▼

          React Frontend

                  │

        HTTP REST Requests

                  │

                  ▼

          Express Backend

                  │

                  ▼

            PostgreSQL
```

---

# 🚀 Deployment Journey

The following workflow represents the complete deployment lifecycle implemented in this project.

```text
Write Code

    │

    ▼

Git Push

    │

    ▼

GitHub Repository

    │

    ▼

GitHub Actions

    │

    ├── Install Dependencies

    ├── Build Docker Images

    ├── Push Images

    ▼

Docker Hub

    │

    ▼

Kubernetes Deployment

    │

    ▼

Amazon EKS

    │

    ▼

CloudTask Application
```

---

# 🔄 CI/CD Pipeline

CloudTask uses **GitHub Actions** to automate the software delivery process.

Whenever changes are pushed to the repository, GitHub Actions automatically performs the deployment workflow.

## Pipeline Stages

### Stage 1

- Checkout Repository

### Stage 2

- Install Dependencies

### Stage 3

- Build Docker Images

### Stage 4

- Push Images to Docker Hub

### Stage 5

- Kubernetes Deployment pulls the latest images

### Stage 6

- Updated application becomes available on Amazon EKS

---

# ☁ Infrastructure

The Kubernetes cluster is deployed on **Amazon Elastic Kubernetes Service (EKS)**.

Infrastructure provisioning is handled separately using **Terraform**, following Infrastructure as Code (IaC) principles.

The Terraform project provisions:

- Amazon VPC
- Public & Private Subnets
- Internet Gateway
- Route Tables
- Security Groups
- IAM Roles
- Amazon EKS Cluster
- Managed Node Groups

This repository consumes that infrastructure by deploying the application workloads to the provisioned Kubernetes cluster.

---

# 📦 Infrastructure Workflow

```text
Terraform

    │

    ├── VPC

    ├── Networking

    ├── IAM

    ├── Security Groups

    ├── Amazon EKS

    └── Worker Nodes

               │

               ▼

      CloudTask Kubernetes Deployment
```

---

# 🔧 Kubernetes Resources

The following Kubernetes resources are used throughout the project.

| Resource | Purpose |
|----------|---------|
| Namespace | Logical isolation |
| ConfigMap | Application configuration |
| Secret | Secure credentials |
| Deployment | Pod management |
| Service | Internal networking |
| Ingress | External routing |
| Persistent Volume | Database storage |
| Persistent Volume Claim | Storage allocation |
| Startup Probe | Initial application validation |
| Readiness Probe | Traffic readiness |
| Liveness Probe | Continuous health monitoring |
| Resource Requests | Minimum CPU & Memory |
| Resource Limits | Maximum CPU & Memory |

---
---

# 🐳 Docker

CloudTask is fully containerized using **Docker**, ensuring consistent application behavior across development, testing, and production environments.

Each service runs inside an isolated container, making deployments predictable and simplifying dependency management.

## Docker Components

| Service | Description |
|----------|-------------|
| Frontend | React + Vite Application |
| Backend | Node.js + Express REST API |
| Database | PostgreSQL |

---

## Docker Workflow

```text
Application Source Code

        │

        ▼

   Docker Build

        │

        ▼

 Docker Images

        │

        ▼

 Docker Hub

        │

        ▼

 Kubernetes Deployment
```

---

## Docker Features

- Multi-stage Docker Builds
- Lightweight Production Images
- Docker Compose
- Environment Variables
- Docker Hub Registry
- Service Isolation

---

# 📦 Helm

CloudTask uses **Helm** to package Kubernetes manifests into reusable deployment charts.

Instead of manually applying multiple YAML files, Helm provides version-controlled and configurable deployments.

## Helm Benefits

- Reusable Charts
- Environment Configuration
- Versioned Releases
- Easy Rollbacks
- Simplified Upgrades
- Cleaner Kubernetes Management

---

## Helm Structure

```text
helm/

├── Chart.yaml
├── values.yaml

└── templates/
    ├── frontend.yaml
    ├── backend.yaml
    ├── postgres.yaml
    ├── service.yaml
    ├── ingress.yaml
    ├── configmap.yaml
    ├── secret.yaml
    ├── pvc.yaml
    └── namespace.yaml
```

---

## Helm Commands

Install

```bash
helm install cloudtask ./infrastructure/helm
```

Upgrade

```bash
helm upgrade cloudtask ./infrastructure/helm
```

Uninstall

```bash
helm uninstall cloudtask
```

---

# 📊 Monitoring

CloudTask includes a monitoring stack to observe both application and Kubernetes cluster health.

The monitoring solution consists of:

- Prometheus
- Grafana

---

# 🔥 Prometheus

Prometheus continuously collects metrics from Kubernetes workloads.

Collected metrics include:

- CPU Usage
- Memory Usage
- Pod Status
- Container Status
- Node Health
- Network Metrics
- Kubernetes Metrics

---

# 📈 Grafana

Grafana visualizes Prometheus metrics using interactive dashboards.

Dashboards provide insights into:

- Cluster Health
- Pod Health
- CPU Usage
- Memory Consumption
- Resource Utilization
- Container Performance
- Application Metrics

---

## Monitoring Flow

```text
Application

      │

      ▼

Kubernetes Metrics

      │

      ▼

Prometheus

      │

      ▼

Grafana

      │

      ▼

Dashboards
```

---

# 📷 Project Screenshots

> Replace the placeholders below with actual screenshots from the project.

---

## Application Dashboard

```
docs/images/dashboard.png
```

---

## Login Page

```
docs/images/login.png
```

---

## Docker Containers

```
docs/images/docker-containers.png
```

---

## GitHub Actions Workflow

```
docs/images/github-actions.png
```

---

## Kubernetes Resources

```
docs/images/kubernetes-resources.png
```

---

## Amazon EKS

```
docs/images/eks-cluster.png
```

---

## Helm Deployment

```
docs/images/helm.png
```

---

## Prometheus Targets

```
docs/images/prometheus.png
```

---

## Grafana Dashboard

```
docs/images/grafana-dashboard.png
```

---

# 💻 Local Development

Clone the repository

```bash
git clone https://github.com/<your-username>/CloudTask.git

cd CloudTask
```

---

## Start Application

```bash
docker compose up --build
```

---

## Stop Application

```bash
docker compose down
```

---

## View Containers

```bash
docker ps
```

---

# ☸ Kubernetes Deployment

Deploy all Kubernetes resources

```bash
kubectl apply -f infrastructure/kubernetes/
```

---

View Pods

```bash
kubectl get pods
```

---

View Services

```bash
kubectl get svc
```

---

View Ingress

```bash
kubectl get ingress
```

---

View Logs

```bash
kubectl logs <pod-name>
```

---

Describe Resources

```bash
kubectl describe pod <pod-name>
```

---

# 🔐 Security

CloudTask follows Kubernetes security best practices.

Implemented security features include:

- Kubernetes Secrets
- ConfigMaps
- Namespace Isolation
- Environment Variables
- Resource Limits
- Health Probes
- Service Isolation

---

# ⚡ Performance & Reliability

The application is configured with production-oriented Kubernetes settings.

Implemented features include:

- Startup Probe
- Readiness Probe
- Liveness Probe
- Resource Requests
- Resource Limits
- Rolling Updates
- Persistent Storage
- Self-Healing Pods

These configurations improve application availability, scheduling efficiency, and operational reliability.

---
---

# 📚 What I Learned

Building **CloudTask** provided hands-on experience across the complete cloud-native application lifecycle, from development to production deployment.

## Full Stack Development

- Designing a modular application architecture
- Building REST APIs with Express.js
- Developing a React frontend using Vite
- Implementing JWT-based authentication
- Integrating PostgreSQL with the backend
- Managing environment-based configurations

---

## Containerization

During this project, I gained practical experience with:

- Docker
- Multi-stage Docker Builds
- Docker Compose
- Image Optimization
- Docker Networking
- Docker Hub Image Registry

---

## Continuous Integration & Delivery

The CI/CD pipeline helped me understand:

- GitHub Actions Workflows
- Automated Docker Image Builds
- Docker Hub Publishing
- Continuous Deployment Workflows
- Pipeline Debugging
- Deployment Automation

---

## Kubernetes

CloudTask provided practical experience working with Kubernetes resources, including:

- Namespaces
- Deployments
- Services
- ConfigMaps
- Secrets
- Persistent Volumes
- Persistent Volume Claims
- Ingress
- Startup Probes
- Readiness Probes
- Liveness Probes
- Resource Requests
- Resource Limits
- Rolling Updates
- Kubernetes Troubleshooting

---

## Cloud Infrastructure

Deployment on Amazon EKS helped strengthen my understanding of:

- Kubernetes Cluster Management
- Cloud Networking
- Application Deployment
- Service Exposure
- Storage Management
- Resource Scheduling

---

## Infrastructure as Code

The underlying Kubernetes infrastructure was provisioned using **Terraform**.

Key concepts applied include:

- VPC
- Public & Private Subnets
- IAM Roles
- Security Groups
- Amazon EKS
- Managed Node Groups
- Remote State Management
- Terraform Modules
- Terraform Workspaces

> **Note:** The Terraform infrastructure is maintained in a dedicated repository and serves as the deployment platform for CloudTask.

---

## Monitoring & Observability

CloudTask integrates modern monitoring tools to observe application and cluster health.

Technologies used:

- Prometheus
- Grafana

These tools provide visibility into:

- Cluster Health
- Pod Status
- CPU Usage
- Memory Usage
- Resource Utilization
- Container Metrics

---

# ⚡ Challenges & Solutions

Building CloudTask involved solving several practical engineering challenges.

| Challenge | Solution |
|-----------|----------|
| Docker Networking | Configured container communication using Docker Compose |
| Database Connectivity | Managed environment variables and service discovery |
| Kubernetes Service Discovery | Connected services through ClusterIP networking |
| Persistent Storage | Implemented PV & PVC for PostgreSQL |
| Image Versioning | Managed images using Docker Hub |
| Health Checks | Configured Startup, Readiness, and Liveness Probes |
| Ingress Routing | Exposed services through NGINX Ingress |
| Kubernetes Scheduling | Tuned deployments and resource requests |
| CI/CD Debugging | Improved workflow reliability through iterative testing |

---

# 🚀 Future Improvements

CloudTask is designed to evolve as new technologies are explored.

Potential future enhancements include:

- Horizontal Pod Autoscaler (HPA)
- TLS using cert-manager
- Custom Domain Configuration
- Argo CD (GitOps)
- Blue-Green Deployments
- Canary Deployments
- AWS Secrets Manager Integration
- Cluster Autoscaler
- Centralized Logging
- Distributed Tracing

---

# 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

To contribute:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

# ⭐ Support

If you found this project useful or interesting, consider giving it a **⭐ Star** on GitHub.

Your support is greatly appreciated and helps motivate future improvements.

---

# 👨‍💻 Author

## Mohit Gupta

DevOps & Cloud Enthusiast

- 📧 Email: mohitgupta553187@gmail.com
- 💼 LinkedIn: https://www.linkedin.com/in/mohitgupta-dev28
- 🌐 GitHub: https://github.com/mohitgupta0829-st

---

# 📄 License

This project is licensed under the **MIT License**.

Feel free to use, modify, and distribute it in accordance with the license.

---

<div align="center">

### 🌟 If you found this project helpful, consider giving it a Star!

**Built with React • Node.js • PostgreSQL • Docker • Kubernetes • Amazon EKS • Terraform • GitHub Actions • Helm • Prometheus • Grafana**

</div>