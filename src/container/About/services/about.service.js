import { client } from "../../../libs/httpClient/sanity.lib";
import { aboutDataAdapter } from "../adapters/about.adapter";
const findCertificatesQuery = '*[_type == "educationCertificates"]';
export const findCertificatesService = async ({ signal }) => {
  const certificates = await client.fetch(
    findCertificatesQuery,
    {},
    {
      signal,
    }
  );
  return aboutDataAdapter(certificates);
};
