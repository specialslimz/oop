//////// question 1////////////

class Travel {
  ticket = 2;
  location = "canada";
  transport = "airplane";

  static passengers = 5;

  static accessStatic() {
    return console.log(Travel.passengers);
  }
  displayTicket() {
    console.log(`you have ${this.ticket} tickets`);
  }
  displayLocation() {
    console.log(`You are going to ${this.location}`);
  }
}

const destination = new Travel();
destination.ticket = 10;
Travel.passengers = 20;
destination.location = "nigeria";
destination.displayLocation();
destination.displayTicket();
Travel.accessStatic();

//////// question 2///////////////
class Statistics {
  constructor(data) {
    this.data = data;
    this.number = data.length;
  }

  mean() {
    const sum = this.data.reduce((acc, value) => acc + value, 0);
    return sum / this.number;
  }

  median() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);

    return sortedData.length % 2 === 0
      ? (sortedData[middle - 1] + sortedData[middle]) / 2
      : sortedData[middle];
  }

  mode() {
    const frequencyTable = {};
    let maxFrequency = 0;
    let mode = null;

    for (const value of this.data) {
      if (!frequencyTable[value]) {
        frequencyTable[value] = 1;
      } else {
        frequencyTable[value]++;
      }

      if (frequencyTable[value] > maxFrequency) {
        maxFrequency = frequencyTable[value];
        mode = value;
      }
    }

    return mode;
  }

  range() {
    const min = Math.min(...this.data);
    const max = Math.max(...this.data);
    return max - min;
  }

  variance() {
    let mean = this.mean();
    const sumOfSquaredDeviations = this.data.reduce(
      (acc, value) => acc + Math.pow(value - mean, 2),
      0
    );
    return Math.floor(sumOfSquaredDeviations / this.number);
  }

  standardDeviation() {
    return Math.floor(Math.sqrt(this.variance()));
  }

  quantileDeviation(quantile) {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    const index = Math.floor((quantile * this.number) / 100);
    const quantileValue = sortedData[index];
    const sumOfAbsoluteDeviations = this.data.reduce(
      (acc, value) => acc + Math.abs(value - quantileValue),
      0
    );
    return sumOfAbsoluteDeviations / this.number;
  }

  absoluteDeviation(centralValue) {
    const sumOfAbsoluteDeviations = this.data.reduce(
      (acc, value) => acc + Math.abs(value - centralValue),
      0
    );
    return sumOfAbsoluteDeviations / this.number;
  }
}

// Example usage:
const data = [1, 2, 22, 8, 9, 23, 4, 6, 8, 10];
const stats = new Statistics(data);

console.log("Mean:", stats.mean());
console.log("Median:", stats.median());
console.log("Mode:", stats.mode());
console.log("Range:", stats.range());
console.log("Variance:", stats.variance());
console.log("Standard Deviation:", stats.standardDeviation());
console.log("Quantile Deviation:", stats.quantileDeviation(50));
console.log(
  "Absolute Deviation (mean):",
  stats.absoluteDeviation(stats.mean())
);
