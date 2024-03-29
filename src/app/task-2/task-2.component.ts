import {Component} from '@angular/core';
import {map, Observable, timer} from 'rxjs';

@Component({
  selector: 'app-task-2',
  template: '<h1>Task #2</h1>',
})
export class Task2Component {

  constructor() {
    this.task2();
  }

  /**
   * Допиши функцию.
   *
   * 1. Принимает на входе поток Observable.
   * 2. Код функции выполняет какую-то полезную работу с данными потока.
   * 3. Функция должна вернуть новый поток Observable.
   * 4. В случаи повторного вызова getData, отписаться от существующего потока.
   *
   * @param stream$
   */
  private getData<T>(stream$: Observable<T>): Observable<T> {
    return stream$;
  }

  /**
   *
   * @private
   */
  private task2(): void {
    this.getData(timer(3000))
      .pipe(
        map(() => `Request #1`),
      ).subscribe((value) => console.log(value));


    this.getData(timer(2000))
      .pipe(
        map(() => `Request #2`),
      ).subscribe((value) => console.log(value));


    this.getData(timer(1000))
      .pipe(
        map(() => `Request #3`),
      ).subscribe((value) => console.log(value));
  }
}
