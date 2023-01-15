/* 0 = none
 * 1 = form-data
 * 2 = x-www-form-urlencoded
 * 3 = raw
 * 4 = binary
 * 5 = GraphQL
 */

export function apiHeaderFormData(type: number) {
  let contentType = "";
  switch (type) {
    case 0:
      contentType = "none";
      break;
    case 1:
      contentType = "multipart/form-data";
      break;
    case 2:
      contentType = "application/x-www-form-urlencoded ";
      break;
    case 3:
      contentType = "application/text/plain";
      break;
    case 4:
      contentType = "application/json";
      break;
    default:
      contentType = "application/x-www-form-urlencoded";
      break;
  }

  return { "Content-Type": contentType };
}
