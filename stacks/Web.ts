import { StackContext, StaticSite, use } from "@serverless-stack/resources"
import { DNS } from "./DNS"

export function Web({ stack, app }: StackContext) {
  const dns = use(DNS)

  const staticSiteConfig: any = {
    // path: "web",
    path: "web",
    buildOutput: "dist",
    buildCommand: "npm run build",
    environment: {
      VITE_APP_REGION: app.region,
      VITE_FOO: "bar",
      // Pass in the API endpoint to our app
      // VITE_API_URL: process.env.VITE_API_URL,
    },
  }

  // for non 'local' environments, set the DNS and redirect URL
  if (["prod", "staging", "dev"].includes(app.stage)) {
    staticSiteConfig.customDomain = {
      domainName: dns.domain,
      hostedZone: dns.zone,
    }
    // staticSiteConfig.environment.VITE_APP_REDIRECT_URL = `https://${dns.domain}`
    // staticSiteConfig.environment.VITE_APP_CUSTOM_DOMAIN = dns.domain
  }

  const site = new StaticSite(stack, "react", staticSiteConfig)

  stack.addOutputs({
    SITE_URL: site.url,
  })
}
