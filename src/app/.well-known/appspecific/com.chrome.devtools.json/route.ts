// Chrome DevTools automatically probes this path when open. This app doesn't
// use the DevTools workspace-folder feature, so just return an empty, valid
// response instead of letting it fall through to a logged 404.
export function GET() {
  return Response.json({});
}
