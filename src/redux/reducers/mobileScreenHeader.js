const mobileScreenHeader = (state = false, { type, payload }) => {
  switch (type) {
    case "MOBILE_SCREEN_HEADER":
      return payload;
    default:
      return state;
  }
};
export default mobileScreenHeader;
