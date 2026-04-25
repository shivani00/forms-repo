module.exports = {
  name: "hasCoverage",
  description: "hasCoverage",
  fn: (data, covCd) => {
    const covCdArray = [covCd];
    return hasAnyCoverage(data, covCdArray);
  }
};