export const checkPermission = (routeRole, userRole) => {
  if (!routeRole || !routeRole) {
    return true;
  }

  if (userRole && Array.isArray(userRole) && !Array.isArray(routeRole)) {
    return userRole.indexOf(routeRole) >= 0;
  }
  if (routeRole.length === 0) {
    return !userRole || userRole.length === 0;
  }
  if (userRole && Array.isArray(userRole) && Array.isArray(routeRole)) {
    return routeRole.some((r) => userRole.indexOf(r) >= 0);
  }
  return routeRole.indexOf(userRole) >= 0;
};
