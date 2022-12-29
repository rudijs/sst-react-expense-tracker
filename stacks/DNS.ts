import { StackContext } from "@serverless-stack/resources"

const MAPPING: Record<string, string> = {
  production: "expense-tracker.rudijs.com",
  staging: "staging.expense-tracker.rudijs.com",
  dev: "dev.expense-tracker.rudijs.com",
}

export function DNS(props: StackContext) {
  const zone = MAPPING[props.app.stage] || "dev.expense-tracker.rudijs.com"
  const domain = MAPPING[props.app.stage] || `${props.app.stage}.dev.expense-tracker.rudijs.com`

  props.stack.addOutputs({
    zone,
    domain,
  })

  return { zone, domain }
}
