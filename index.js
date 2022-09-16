class Formatter {
  constructor(option) {
    this.option = option;
  }
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9- ']/g, "");
  }

  static titleize(string) {
    const words = string.split(" ");
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const title = words.map((word) => {
      if (exceptions.includes(word)) {
        return word;
      } else {
        return this.capitalize(word);
      }
    });
    return this.capitalize(title.join(" "));
  }
}
