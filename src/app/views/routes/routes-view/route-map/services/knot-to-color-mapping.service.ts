import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KnotToColorMappingService {
  private readonly RGB_MAX: number = 255;
  private readonly HIGH_SPEED_IN_KNOTS: number = 30;
  private readonly HALF_SPEED: number = this.HIGH_SPEED_IN_KNOTS / 2;
  private readonly SPEED_MULTIPLIER: number = this.RGB_MAX / this.HALF_SPEED;

  getColor(speed) {
    const reducedSpeed = this.reduceSpeedToRange(speed);
    if (reducedSpeed <= this.HALF_SPEED) {
      return `rgb(255, ${this.getAscendingGreen(reducedSpeed)}, 0)`;
    } else {
      const highSpeedBaseValue = reducedSpeed - this.HALF_SPEED;
      return `rgb(${this.getDescendingRed(highSpeedBaseValue)}, 255, 0)`;
    }
  }

  private getDescendingRed(speed) {
    return Math.max(
      Math.floor(this.RGB_MAX - (speed * this.SPEED_MULTIPLIER)),
      0);
  }

  private getAscendingGreen(speed) {
    return Math.min(
      Math.ceil(speed * this.SPEED_MULTIPLIER),
      255);
  }

  private reduceSpeedToRange(speed) {
    return Math.min(
      Math.max(speed, 0),
      this.HIGH_SPEED_IN_KNOTS);
  }
}
