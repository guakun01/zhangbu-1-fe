/** Usage example:
 * import { time } from 'shared/time';
 * const t = new time();
 * time.format('YYYY-MM-DD');
 * time.firstDayOfMonth();
 * time.firstDayOfYear();
 * time.lastDayOfMonth();
 * time.lastDayOfYear();
 * time.add(1, 'month');
 */
export class Time {
  date: Date;

  constructor(date = new Date()) {
    this.date = date;
  }

  format(pattern = 'YYYY-MM-DD') {
    // support pattern: YYYY MM DD HH mm ss SSS
    const year = this.date.getFullYear();
    const month = this.date.getMonth() + 1;
    const day = this.date.getDate();
    const hour = this.date.getHours();
    const minute = this.date.getMinutes();
    const seconds = this.date.getSeconds();
    const msecond = this.date.getMilliseconds();

    return pattern.replace(/YYYY/g, year.toString())
      .replace(/MM/g, month.toString().padStart(2, '0'))
      .replace(/DD/g, day.toString().padStart(2, '0'))
      .replace(/HH/g, hour.toString().padStart(2, '0'))
      .replace(/mm/g, minute.toString().padStart(2, '0'))
      .replace(/ss/g, seconds.toString().padStart(2, '0'))
      .replace(/SSS/g, msecond.toString().padStart(3, '0'))
  }

  firstDayOfMonth() {
    return new Time(new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0));
  }

  firstDayOfYear() {
    return new Time(new Date(this.date.getFullYear(), 0, 1, 0, 0, 0, 0))
  }

  lastDayOfMonth() {
    return new Time(new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0, 0, 0, 0, 0));
  }

  lastDayOfYear() {
    return new Time(
      new Date(this.date.getFullYear() + 1, 0, 0, 0, 0, 0, 0)
    )
  }
  
  add(value: number, unit: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond') {
    // return new Time but not change this.date
    const date = new Date(this.date);
    switch (unit) {
      case 'year':
        date.setFullYear(date.getFullYear() + value);
        break;
      case 'month':
        const d = date.getDate(); // 1.31
        date.setDate(1); // 1.1
        date.setMonth(date.getMonth() + value); // 2.1
        const d2 = new Date(date.getFullYear(),
          date.getMonth() + 1,
          0, 0, 0, 0, 0).getDate(); // 2.28
        date.setDate(Math.min(d, d2)); // 2.28
        break;
      case 'day':
        date.setDate(date.getDate() + value);
        break;
      case 'hour':
        date.setHours(date.getHours() + value);
        break;
      case 'minute':
        date.setMinutes(date.getMinutes() + value);
        break;
      case 'second':
        date.setSeconds(date.getSeconds() + value);
        break;
      case 'millisecond':
        date.setMilliseconds(date.getMilliseconds() + value);
        break;
      default:
        throw new Error('unit must be year, month, day, hour, minute, second or millisecond');
    }
    return new Time(date);
  }
}

