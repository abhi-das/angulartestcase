import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/map';


@Injectable()

export class TaskdataService {

	constructor(private _http: Http) {

	}

	getTask(): Observable<any> {

		return this._http.get('/data/task_data.json')
					.map((res: Response) => {

						return res.json();
					});
	}

	getTaskById(id: string) {



	}


}
