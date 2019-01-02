
export * from "./fetch";
export * from "./proxy";
import * as middleware from "./middleware"
export { middleware }
import * as backends from "./backends";
export { backends };
export { isCdnConfig, buildCdn, buildCdnFromAppConfig } from "./config";

export { pipeline } from "@fly/v8env/lib/fly/fetch/pipeline";
export { proxy } from "./proxy";

declare global {
  var app: any
}
