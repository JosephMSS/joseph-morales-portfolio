import { createClient } from "@sanity/client";
import { config } from "../../config/config";
const clientOptions = config.libs.sanity;
export const client = createClient(clientOptions);
