import { createClient } from "@sanity/client";
import { config } from "../../config/config";
const clientOptions = config.libs.sanity;
/**
 * @link Abort controller use doc: https://www.sanity.io/docs/js-client#aborting-a-request
 * 
 */
export const client = createClient(clientOptions);
