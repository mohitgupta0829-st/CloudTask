cluster_name = "development-eks"

kubernetes_version = "1.33"

instance_types = [
  "c7i-flex.large"
]

desired_size = 2

min_size = 1

max_size = 5
