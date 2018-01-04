import { 
	TestBed, 
	inject, 
	async
} from '@angular/core/testing';

import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { Observable } from 'rxjs/Rx';

import { TaskdataService } from './taskdata.service';

describe('TaskdataService', () => {

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				TaskdataService,
				MockBackend,
				BaseRequestOptions,
				{
		          provide: Http,
		          useFactory: (backend, options) => new Http(backend, options),
		          deps: [MockBackend, BaseRequestOptions]
		        }
			]
		});
	});

	it('TaskdataService should be created', 
		inject([TaskdataService, MockBackend], (service: TaskdataService, mockBackend: MockBackend) => {
			expect(service).toBeTruthy();
			expect(service).toBeDefined();
		})
	);

	it('Get Tasks ',  
		async(inject([ TaskdataService, MockBackend ], (_taskSrv: TaskdataService, mockBackend: MockBackend) => {

			let responseDt = {
				"tasks": [{
					"_id": "abc123",
					"title": "Task title 1",
					"description": "Some description here of the task."
				}]
			};

			mockBackend.connections.subscribe(conn => {
			        conn.mockRespond(new Response(new ResponseOptions({ 
			        	body: JSON.stringify(responseDt) 
			        }))
		        );
		    });

			_taskSrv.getTask().subscribe((res: Response) => {

				expect(res['tasks'][0]['_id']).toBe(`abc123`);

			});

		}));	
	);



});
