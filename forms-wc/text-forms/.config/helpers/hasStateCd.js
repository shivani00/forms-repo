module.exports = {
  name: "hasStateCd",
  description: "hasStateCd",
  fn: (data, stateCd) => {
    return (data || []).some(stateInput => stateInput === stateCd);
  }
}