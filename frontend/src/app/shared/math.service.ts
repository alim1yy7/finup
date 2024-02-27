import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  getMax(array: number[]): number {
    let max = 0;
    array.forEach((el) => {
      if (el > max) max = el;
    });

    return max;
  }
  getAverage(array: number[]): number {
    const sum = array[0];
    return (
      array.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        sum
      ) / array.length
    );
  }
  getMin(array: number[]): number {
    let min = array[0];
    array.forEach((el) => {
      if (el <= min) min = el;
    });

    return min;
  }
}
