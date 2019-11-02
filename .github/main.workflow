workflow "check-and-release" {
  on = "push"
  resolves = ["Webhook action"]
}

action "Webhook action" {
  uses = "./.github/actions/webhook"
  args = ["routesToTest","baseURL","hook"]
  env = {
    AUTH_TOKEN = "123"
  }
}
